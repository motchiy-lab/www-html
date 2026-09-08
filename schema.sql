-- Cloudflare D1 Database Schema for PV Counter
CREATE TABLE IF NOT EXISTS page_views (
  path TEXT NOT NULL,
  year INTEGER NOT NULL,
  month INTEGER NOT NULL,
  count INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (path, year, month)
);
