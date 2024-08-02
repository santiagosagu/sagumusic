/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Result, Typography } from "antd";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <Result
      status="404"
      title={
        <div className="p-4 flex justify-center">
          <div className="w-80">
            <img src="public/image/logo.jpeg" />
          </div>
        </div>
      }
      subTitle={
        <Typography className="text-white">
          Sorry, something went wrong.
        </Typography>
      }
      extra={
        <Link to={"/"}>
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  );
}
