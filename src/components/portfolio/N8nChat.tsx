"use client";

import { useEffect } from "react";
import { createChat } from "@n8n/chat";
import "@n8n/chat/style.css";

export default function N8nChat() {
  useEffect(() => {
    const chat = createChat({
      target: "#site-n8n-chat",
      webhookUrl:
        "https://minhazuddinrafi.app.n8n.cloud/webhook/21e545a3-781a-41bd-b53f-bef360458950/chat",
      initialMessages: ["হ্যালো! 👋 আমি NeutrinoByte-এর সহকারী। কীভাবে সাহায্য করতে পারি?"],
      i18n: {
        en: {
          title: "NeutrinoByte সাপোর্ট",
          subtitle: "আমরা আপনার সাহায্যে আছি",
          footer: "",
          getStarted: "চ্যাট শুরু করুন",
          inputPlaceholder: "আপনার মেসেজ লিখুন...",
          closeButtonTooltip: "চ্যাট বন্ধ করুন",
        },
      },
    });

    return () => {
      chat.unmount();
    };
  }, []);

  return <div id="site-n8n-chat" aria-label="NeutrinoByte support chat" />;
}
