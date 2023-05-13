import BaseAPIClient from "@/lib/BaseApiClient";

class GoogleAPIClient extends BaseAPIClient {
  constructor() {
    super({
      baseURL: "https://www.googleapis.com",
      headers: {
        "Content-type": "application/json",
      },
    });
  }
}

const googleApiClient = new GoogleAPIClient();
export default googleApiClient;
