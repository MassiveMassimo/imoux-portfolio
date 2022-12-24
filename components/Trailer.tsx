export default function Trailer() {
  if (typeof window !== "undefined") {
    const trailer = document.getElementById("trailer");

    trailer!.style.transition = "top 0.1s, left 0.1s";

    window.onmousemove = (event) => {
      trailer!.style.top = `${event.clientY - trailer!.offsetHeight / 2}px`;
      trailer!.style.left = `${event.clientX - trailer!.offsetWidth / 2}px`;

      // Find the nearest ancestor element with the "interactable" class
      const interactable = (event.target as Element).closest(".interactable");

      // Check if the trailer is hovering over an interactable element
      const interacting = interactable !== null;

      if (interacting) {
        trailer!.classList.add("h-24", "w-24");
      } else {
        trailer!.classList.remove("h-24", "w-24");
      }
    };
  }

  //   const animateTrailer = (e: MouseEvent, interacting: boolean) => {
  //     const trailer = document.getElementById("trailer");
  //     const x = e.clientX - trailer!.offsetWidth / 2,
  //       y = e.clientY - trailer!.offsetHeight / 2;

  //     const keyframes = {
  //       transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`,
  //     };

  //     trailer!.animate(keyframes, {
  //       duration: 800,
  //       fill: "forwards",
  //     });
  //   };

  //   const getTrailerClass = (type: any) => {
  //     switch (type) {
  //       case "video":
  //         return "fa-solid fa-play";
  //       default:
  //         return "fa-solid fa-arrow-up-right";
  //     }
  //   };

  //   if (typeof window !== "undefined") {
  //     window.onmousemove = (e) => {
  //       const trailer = document.getElementById("trailer");
  //       const interactable = e.target as Element;
  //       const interacting = interactable.matches(".interactable");

  //       const icon = document.getElementById("trailer-icon");

  //       animateTrailer(e, interacting);

  //       trailer!.dataset.type = interactable?.getAttribute("data-type") ?? "";

  //       if (interacting) {
  //         icon!.className = getTrailerClass(
  //           interactable.getAttribute("data-type")
  //         );
  //       }
  //     };
  //   }

  return (
    <div
      id="trailer"
      className="highlight fixed top-0 left-0 z-50 h-12 w-12 pointer-events-none items-center rounded-full p-4"
    >
      <svg
        id="trailer-icon"
        className="h-full overflow-visible fill-black dark:fill-white"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        />
        <path d="M15.2244 13.7681L15.2244 9.52541C15.2244 9.11529 14.885 8.77588 14.4749 8.77588L10.2322 8.77588C9.82209 8.77588 9.48268 9.11529 9.48268 9.52541C9.48268 9.93553 9.82209 10.2749 10.2322 10.2749L12.6647 10.2749L8.99478 13.9448C8.70487 14.2347 8.70487 14.7156 8.99478 15.0055C9.28469 15.2954 9.76553 15.2954 10.0554 15.0055L13.7253 11.3356L13.7253 13.7681C13.7253 13.9802 13.8102 14.164 13.9445 14.2984C14.0789 14.4327 14.2627 14.5176 14.4749 14.5176C14.885 14.5176 15.2244 14.1782 15.2244 13.7681Z" />
      </svg>
    </div>
  );
}
