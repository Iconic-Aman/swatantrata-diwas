import boto3
import os
from dotenv import load_dotenv

load_dotenv()

s3 = boto3.client(
    "s3",
    endpoint_url=os.getenv("R2_ENDPOINT"),
    aws_access_key_id=os.getenv("R2_ACCESS_KEY_ID"),
    aws_secret_access_key=os.getenv("R2_SECRET_ACCESS_KEY"),
    region_name="auto",
)

response = s3.list_objects_v2(
    Bucket=os.getenv("R2_BUCKET_NAME")
)

for obj in response.get("Contents", []):
    print(obj["Key"])


# print("Bucket:", os.getenv("R2_BUCKET_NAME"))
# print("Endpoint:", os.getenv("R2_ENDPOINT"))
# print("Access Key:", os.getenv("R2_ACCESS_KEY_ID"))