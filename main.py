import snowflake.connector
import snowflake
def hello():
    # Create a connection object
    conn = snowflake.connector.connect(
        user='XXXX',
        password='XXXX',
        account='XXXX',
        session_parameters={
            "CLIENT_TELEMETRY_ENABLED": False,
        }
    )
    conn.close()

if __name__ == '__main__':
    hello()
