import api from "../base-api/base-api";

export interface Banner {
  _id?: string;
  banner_serial?: number;
  banner_image?: string;
  banner_image_key?: string;
  banner_status?: string;
  banner_path?: string;
}

interface BannersResponse {
  data: Banner[];
  message: string;
  success: boolean;
}

const DUMMY_BANNERS: Banner[] = [
  {
    _id: "dummy-1",
    banner_serial: 1,
    banner_image: "/image/banner2.jpg",
    banner_status: "active",
    banner_path: "/",
  },
  {
    _id: "dummy-2",
    banner_serial: 2,
    banner_image: "/image/banner2.jpg",
    banner_status: "active",
    banner_path: "/",
  },
  {
    _id: "dummy-3",
    banner_serial: 3,
    banner_image: "/image/banner2.jpg",
    banner_status: "active",
    banner_path: "/",
  },
];

// API ENDPOINTS
const BANNER_ENDPOINTS = {
  LIST: "/banner",
};

/**
 * Fetch all banners
 */
export const fetchBanners = async (): Promise<Banner[]> => {
  try {
    const response = await api.get<BannersResponse>(BANNER_ENDPOINTS.LIST);
    const banners = response?.data?.data ?? [];

    if (!Array.isArray(banners) || banners.length === 0) {
      return DUMMY_BANNERS;
    }

    return banners;
  } catch {
    return DUMMY_BANNERS;
  }
};
