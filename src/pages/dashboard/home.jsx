import React, { useRef } from "react";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";

export function Home() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [result, setResult] = React.useState("");

  async function botAutoPost() {
    setIsLoading(true);
    await fetch("http://localhost:3000/post")
      .then((res) => res.json())
      .then((result) => {
        setResult(result?.postUrl);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }

  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6">
        <Card className="mt-6 w-full">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Instagram Auto Posting
            </Typography>
            <Typography>
              Ubah file post.json untuk mengubah data postingan.
            </Typography>
            <Typography>Hasil : {result}</Typography>
            <Button
              disabled={isLoading}
              variant="outlined"
              className="mt-3 flex items-center gap-3 normal-case"
              onClick={botAutoPost}
            >
              Mulai Ya
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Home;
