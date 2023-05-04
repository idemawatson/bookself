import BaseApiClient from "@/lib/BaseApiClient";

const baseURL = `${process.env["NEXT_PUBLIC_BACKEND_API_URL"]}/api`;

class BackendApiClient extends BaseApiClient {
  constructor() {
    super({
      baseURL,
      headers: {
        "Content-type": "application/json",
      },
    });
  }
}

export default new BackendApiClient();
