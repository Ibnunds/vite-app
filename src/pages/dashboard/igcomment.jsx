import React, { useRef } from "react";
import {
  Typography,
  Card,
  CardBody,
  Button,
  Spinner,
  Chip,
  Input,
} from "@material-tailwind/react";

export function IGComment() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState();
  const [target, setTarget] = React.useState("");
  const [targetValid, setTargetValid] = React.useState(true);

  async function botAutoComment() {
    setData();
    setIsLoading(true);
    await fetch(`http://localhost:3000/ig/comment?target=${target}`)
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

  const validasiURL = () => {
    const instagramURLRegex =
      /https:\/\/(www\.)?instagram\.com\/p\/[A-Za-z0-9_-]+\/?/;

    if (instagramURLRegex.test(target)) {
      setTargetValid(true);
      botAutoComment();
    } else {
      setTargetValid(false);
    }
  };

  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-6 gap-x-6">
        <Card className="mt-6 w-full">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Instagram Auto Comment
            </Typography>
            <Typography>
              Ubah file komentar.json untuk mengubah data komentar.
            </Typography>
            <div className="my-3">
              <Input
                type="url"
                label="Masukan URL postingan IG"
                value={target}
                onChange={(e) => {
                  setTarget(e.target.value);
                  setTargetValid(true);
                }}
              />
              {!targetValid && (
                <Typography
                  variant="small"
                  color="gray"
                  className="mt-2 flex items-center gap-1 font-normal text-red-500"
                >
                  Url postingan instagram tidak valid
                </Typography>
              )}
            </div>
            {isLoading && (
              <div className="mt-3 flex gap-4">
                <Spinner className="h-6 w-6" />
                <Typography>Sedang memproses...</Typography>
              </div>
            )}
            <Button
              disabled={isLoading || !targetValid || !target}
              variant="outlined"
              className="mt-3 flex items-center gap-3 border-blue-500 normal-case text-blue-500"
              onClick={validasiURL}
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
                Hasil BOT Instagram Auto Comment ( hasil lebih detail bisa di
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

export default IGComment;
