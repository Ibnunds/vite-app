import React, { useRef } from "react";
import {
  Typography,
  Card,
  CardBody,
  Button,
  Spinner,
  Chip,
} from "@material-tailwind/react";

export function IGPost() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState();

  async function botAutoPost() {
    setData();
    setIsLoading(true);
    await fetch("http://localhost:3000/ig/post")
      .then((res) => res.json())
      .then((result) => {
        setData(result.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setData(err);
        setIsLoading(false);
      });
  }

  const TestCom = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-6 gap-x-6">
        <Card className="mt-6 w-full">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Instagram Auto Posting
            </Typography>
            <Typography>
              Ubah file post.json untuk mengubah data postingan.
            </Typography>
            {isLoading && (
              <div className="mt-3 flex gap-4">
                <Spinner className="h-6 w-6" />
                <Typography>Sedang memproses...</Typography>
              </div>
            )}
            <Button
              disabled={isLoading}
              variant="outlined"
              className="mt-3 flex items-center gap-3 border-blue-500 normal-case text-blue-500"
              onClick={botAutoPost}
            >
              Mulai
            </Button>
          </CardBody>
        </Card>

        {data && !isLoading && (
          <Card className="w-full">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Hasil
              </Typography>
              <Typography className="my-3">
                Hasil BOT Instagram Auto Posting ( hasil lebih detail bisa di
                cek di folder server/report)
              </Typography>
              <div className="flex gap-2">
                <Chip
                  className="border-green-500 text-green-700"
                  variant="outlined"
                  value={`Sukses: ${data?.sukses}`}
                />
                <Chip
                  className="border-red-500 text-red-700"
                  variant="outlined"
                  value={`Gagal : ${data?.failed}`}
                />
                <Chip
                  variant="outlined"
                  value={`Total Akun : ${data?.totalAkun}`}
                />
              </div>
            </CardBody>
          </Card>
        )}
      </div>
    </div>
  );
}

export default IGPost;
