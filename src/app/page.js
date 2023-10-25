'use client'
import Modal from "@/components/Modal";
import { useState } from "react";
import Main from "../components/main";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
    <Modal showModal={showModal} setShowModal={setShowModal} />
    <Main />
    </>
  )
}
