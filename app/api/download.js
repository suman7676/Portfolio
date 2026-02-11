
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "public/resume/Suman_Ahammed_Resume.pdf");
  const stat = fs.statSync(filePath);

  res.setHeader("Content-Length", stat.size);
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=Suman_Ahammed_Resume.pdf");

  const file = fs.createReadStream(filePath);
  file.pipe(res);
}
