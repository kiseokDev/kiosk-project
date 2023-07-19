class Api {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  protected async getRequest<NextResponse>(): Promise<NextResponse> {
    return await fetch(this.url, {
      cache: "no-store",
    }).then(res => res.json());
  }
}

export class MenuListAPI extends Api {
  async getData(): Promise<MenuType[]> {
    return await this.getRequest<MenuType[]>();
  }
}

export class MenuDetailAPI extends Api {
  async getData(): Promise<MenuType> {
    return await this.getRequest<MenuType>();
  }
}

export class MenuCategoryAPI extends Api {
  async getData(): Promise<string[]> {
    return await this.getRequest<string[]>();
  }
}
