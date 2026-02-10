import json
import os
import psycopg2
from datetime import datetime

def handler(event: dict, context) -> dict:
    """
    Возвращает список занятых дат из базы данных бронирований.
    Используется для блокировки занятых периодов в календаре.
    """
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': '',
            'isBase64Encoded': False
        }

    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }

    dsn = os.environ.get('DATABASE_URL')
    if not dsn:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Database configuration missing'}),
            'isBase64Encoded': False
        }

    conn = None
    try:
        conn = psycopg2.connect(dsn)
        cur = conn.cursor()
        
        cur.execute("""
            SELECT checkin_date, checkout_date 
            FROM t_p93042937_landing_page_generat.bookings 
            WHERE status != 'cancelled'
            ORDER BY checkin_date
        """)
        
        bookings = cur.fetchall()
        
        occupied_dates = []
        for checkin, checkout in bookings:
            occupied_dates.append({
                'from': checkin.isoformat() if isinstance(checkin, datetime) else str(checkin),
                'to': checkout.isoformat() if isinstance(checkout, datetime) else str(checkout)
            })
        
        cur.close()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'occupiedDates': occupied_dates}),
            'isBase64Encoded': False
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': str(e)}),
            'isBase64Encoded': False
        }
    finally:
        if conn:
            conn.close()
