CREATE KEYSPACE IF NOT EXISTS jasper_gateway
    WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 3 }
    AND DURABLE_WRITES = true;
