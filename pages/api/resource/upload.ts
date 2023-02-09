import type { NextApiRequest, NextApiResponse } from 'next'
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false
  }
};

const post = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async function (err, fields, data) {
    const fileUrl = await saveFile(data.file, fields.fileName, fields.filePath);
    
    return res.status(201).send({ fileUrl });
  });
};

const saveFile = async (file: any, fileName: any, filePath: any) => {
  const data = fs.readFileSync(file.filepath);
  const newFilePath = filePath ? `${filePath}/` : '';
  const encodedUrl = encodeURI(fileName ? `${fileName}.${file.originalFilename?.split('.').slice(-1)}` : file.originalFilename);
  fs.writeFileSync(`./public/uploaded/${newFilePath}${encodedUrl}`, data);
  await fs.unlinkSync(file.filepath);
  return `/uploaded/${newFilePath}${encodedUrl}`;
};

export default (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  req.method === "POST"
    ? post(req, res)
    : req.method === "PUT"
      ? console.log("PUT")
      : req.method === "DELETE"
        ? console.log("DELETE")
        : req.method === "GET"
          ? console.log("GET")
          : res.status(404).send("");
};
