import React, { useEffect, useRef, useState } from "react";
import "./Button.css";
import { toAny } from "file-to-any";

export default function Button({ text }: { text: string }) {
  const ref = useRef(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [active, setActive] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [name, setName] = useState(text);
  const [dataUrl, setDataUrl] = useState(null);

  const dragenter = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActive(true);
  };

  const dragover = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const dragleave = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActive(false);
  };

  const drop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActive(false);

    const fileName = e.dataTransfer.files[0].name;
    setName(fileName);

    toAny(e.dataTransfer.files[0], "dataUrl").then((dataUrl) => {
      setDataUrl(dataUrl);
    });
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("dragenter", dragenter, false);
      ref.current.addEventListener("dragover", dragover, false);
      ref.current.addEventListener("dragleave", dragleave, false);
      ref.current.addEventListener("drop", drop, false);
    }
    if (audioRef.current) {
      audioRef.current.addEventListener("ended", () => {
        setPlaying(false);
      });
    }
  }, []);

  const handleClick = () => {
    if (dataUrl && audioRef.current) {
      if (!playing) {
        audioRef.current.play().then(() => setPlaying(true));
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setPlaying(false);
      }
    }
  };

  return (
    <div
      className={`button ${active ? "active" : ""} ${playing ? "playing" : ""}`}
      ref={ref}
      onClick={handleClick}
    >
      <span className={`label ${name.length > 5 ? "small" : ""}`}>{name}</span>
      <audio src={dataUrl} ref={audioRef} />
    </div>
  );
}
