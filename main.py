import snowflake.connector
conn = snowflake.connector.connect(
    user='XXXX',
    password='XXXX',
    account='XXXX',
    session_parameters={
      "CLIENT_TELEMETRY_ENABLED": False,
    }
)