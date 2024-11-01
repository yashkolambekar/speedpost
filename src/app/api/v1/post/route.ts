import { NextResponse, type NextRequest } from "next/server";

const POST = async (request: NextRequest) => {

  const data = await request.formData();
  const finalData = Array.from(data.entries());
  console.log(finalData);
  
  return NextResponse.json({
    status: "Working",
    origin: request.headers.get("origin"),
    data: finalData
  });
};

export { POST };
