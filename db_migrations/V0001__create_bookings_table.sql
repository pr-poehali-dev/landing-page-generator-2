-- Таблица для заявок с сайта гостиницы для кошек
CREATE TABLE IF NOT EXISTS bookings (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    email VARCHAR(255),
    checkin_date DATE NOT NULL,
    checkout_date DATE NOT NULL,
    tariff VARCHAR(50) NOT NULL,
    cat_count INTEGER DEFAULT 1,
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'new'
);

-- Индекс для быстрого поиска по статусу
CREATE INDEX idx_bookings_status ON bookings(status);

-- Индекс для поиска по дате создания
CREATE INDEX idx_bookings_created_at ON bookings(created_at DESC);

COMMENT ON TABLE bookings IS 'Заявки на бронирование с сайта';
COMMENT ON COLUMN bookings.status IS 'Статус заявки: new, confirmed, cancelled';
COMMENT ON COLUMN bookings.tariff IS 'Тариф: standard, comfort, luxury';
