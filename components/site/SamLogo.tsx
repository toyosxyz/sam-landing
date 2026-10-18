/** Pixel mascot from Paper · Píxel · Fondos · Moss · Icono */
const INK = "#2C3D21";
const MOSS = "#4F6B3A";
const PAPER = "#F6F4EE";
const BRASA = "#A3E635";

const INK_PATH =
  "M22,0h2v1h-2zM28,0h2v1h-2zM20,1h12v1h-12zM18,2h15v1h-15zM17,3h20v1h-20zM14,4h24v1h-24zM14,5h23v1h-23zM12,6h1v1h-1zM14,6h25v1h-25zM12,7h27v1h-27zM12,8h10v1h-10zM23,8h17v1h-17zM11,9h7v1h-7zM19,9h3v1h-3zM26,9h14v1h-14zM11,10h7v1h-7zM19,10h4v1h-4zM26,10h2v1h-2zM29,10h12v1h-12zM11,11h5v1h-5zM17,11h2v1h-2zM20,11h4v1h-4zM26,11h1v1h-1zM30,11h12v1h-12zM10,12h7v1h-7zM18,12h1v1h-1zM26,12h1v1h-1zM30,12h12v1h-12zM11,13h4v1h-4zM16,13h1v1h-1zM32,13h11v1h-11zM11,14h4v1h-4zM32,14h11v1h-11zM10,15h5v1h-5zM23,15h7v1h-7zM33,15h10v1h-10zM11,16h9v1h-9zM23,16h4v1h-4zM34,16h5v1h-5zM40,16h3v1h-3zM11,17h4v1h-4zM17,17h4v1h-4zM24,17h5v1h-5zM34,17h5v1h-5zM41,17h3v1h-3zM11,18h4v1h-4zM16,18h1v1h-1zM18,18h3v1h-3zM34,18h4v1h-4zM39,18h1v1h-1zM41,18h3v1h-3zM13,19h2v1h-2zM20,19h1v1h-1zM34,19h4v1h-4zM40,19h2v1h-2zM13,20h2v1h-2zM35,20h3v1h-3zM40,20h2v1h-2zM13,21h2v1h-2zM19,21h1v1h-1zM37,21h1v1h-1zM40,21h2v1h-2zM19,22h1v1h-1zM39,22h4v1h-4zM15,23h1v1h-1zM19,23h5v1h-5zM38,23h4v1h-4zM15,24h1v1h-1zM37,24h4v1h-4zM15,25h1v1h-1zM36,25h5v1h-5zM15,26h1v1h-1zM20,26h5v1h-5zM36,26h3v1h-3zM40,26h1v1h-1zM16,27h1v1h-1zM19,27h1v1h-1zM36,27h2v1h-2zM16,28h3v1h-3zM21,28h2v1h-2zM36,28h7v1h-7zM16,29h2v1h-2zM36,29h9v1h-9zM15,30h3v1h-3zM32,30h1v1h-1zM36,30h10v1h-10zM14,31h2v1h-2zM18,31h1v1h-1zM30,31h2v1h-2zM36,31h5v1h-5zM43,31h3v1h-3zM13,32h2v1h-2zM18,32h1v1h-1zM28,32h3v1h-3zM36,32h3v1h-3zM41,32h5v1h-5zM8,33h1v1h-1zM12,33h2v1h-2zM17,33h4v1h-4zM26,33h4v1h-4zM34,33h4v1h-4zM40,33h7v1h-7zM5,34h1v1h-1zM8,34h2v1h-2zM12,34h2v1h-2zM16,34h13v1h-13zM33,34h4v1h-4zM39,34h9v1h-9zM4,35h9v1h-9zM15,35h12v1h-12zM32,35h4v1h-4zM38,35h11v1h-11zM4,36h9v1h-9zM15,36h8v1h-8zM24,36h2v1h-2zM31,36h4v1h-4zM37,36h13v1h-13zM5,37h7v1h-7zM14,37h9v1h-9zM30,37h4v1h-4zM35,37h9v1h-9zM48,37h3v1h-3zM4,38h3v1h-3zM10,38h2v1h-2zM14,38h9v1h-9zM29,38h4v1h-4zM34,38h8v1h-8zM49,38h2v1h-2zM3,39h2v1h-2zM11,39h1v1h-1zM13,39h3v1h-3zM17,39h7v1h-7zM28,39h3v1h-3zM32,39h8v1h-8zM43,39h8v1h-8zM3,40h1v1h-1zM8,40h9v1h-9zM18,40h6v1h-6zM27,40h11v1h-11zM40,40h12v1h-12zM2,41h1v1h-1zM6,41h4v1h-4zM11,41h7v1h-7zM20,41h4v1h-4zM26,41h27v1h-27zM1,42h2v1h-2zM5,42h1v1h-1zM10,42h10v1h-10zM21,42h33v1h-33zM1,43h1v1h-1zM11,43h10v1h-10zM22,43h32v1h-32zM1,44h1v1h-1zM8,44h2v1h-2zM12,44h17v1h-17zM31,44h23v1h-23zM1,45h1v1h-1zM5,45h2v1h-2zM10,45h18v1h-18zM29,45h24v1h-24zM0,46h2v1h-2zM11,46h16v1h-16zM28,46h25v1h-25zM1,47h1v1h-1zM9,47h1v1h-1zM11,47h41v1h-41zM1,48h1v1h-1zM6,48h2v1h-2zM10,48h42v1h-42zM1,49h2v1h-2zM11,49h40v1h-40zM2,50h1v1h-1zM10,50h40v1h-40zM2,51h1v1h-1zM8,51h41v1h-41zM2,52h1v1h-1zM9,52h39v1h-39zM3,53h1v1h-1zM9,53h38v1h-38zM8,54h37v1h-37zM7,55h2v1h-2zM10,55h33v1h-33zM13,56h27v1h-27zM17,57h19v1h-19z";

const FACE_PATH =
  "M22,8h1v1h-1zM18,9h1v1h-1zM22,9h4v1h-4zM18,10h1v1h-1zM23,10h3v1h-3zM28,10h1v1h-1zM16,11h1v1h-1zM19,11h1v1h-1zM24,11h2v1h-2zM27,11h3v1h-3zM17,12h1v1h-1zM19,12h7v1h-7zM27,12h3v1h-3zM15,13h1v1h-1zM17,13h15v1h-15zM15,14h17v1h-17zM15,15h8v1h-8zM30,15h3v1h-3zM20,16h3v1h-3zM27,16h7v1h-7zM39,16h1v1h-1zM15,17h2v1h-2zM21,17h3v1h-3zM29,17h5v1h-5zM39,17h2v1h-2zM15,18h1v1h-1zM17,18h1v1h-1zM21,18h13v1h-13zM38,18h1v1h-1zM40,18h1v1h-1zM15,19h5v1h-5zM21,19h13v1h-13zM38,19h2v1h-2zM15,20h20v1h-20zM38,20h2v1h-2zM15,21h4v1h-4zM20,21h17v1h-17zM38,21h2v1h-2zM15,22h4v1h-4zM20,22h19v1h-19zM16,23h3v1h-3zM24,23h14v1h-14zM16,24h21v1h-21zM16,25h20v1h-20zM16,26h4v1h-4zM25,26h11v1h-11zM17,27h2v1h-2zM20,27h16v1h-16zM19,28h2v1h-2zM23,28h13v1h-13zM18,29h18v1h-18zM18,30h14v1h-14zM33,30h3v1h-3zM16,31h2v1h-2zM19,31h11v1h-11zM32,31h4v1h-4zM41,31h2v1h-2zM15,32h3v1h-3zM19,32h9v1h-9zM31,32h5v1h-5zM39,32h2v1h-2zM14,33h3v1h-3zM21,33h5v1h-5zM30,33h4v1h-4zM38,33h2v1h-2zM6,34h2v1h-2zM14,34h2v1h-2zM29,34h4v1h-4zM37,34h2v1h-2zM13,35h2v1h-2zM27,35h5v1h-5zM36,35h2v1h-2zM13,36h2v1h-2zM23,36h1v1h-1zM26,36h5v1h-5zM35,36h2v1h-2zM12,37h2v1h-2zM23,37h7v1h-7zM34,37h1v1h-1zM44,37h4v1h-4zM12,38h2v1h-2zM23,38h6v1h-6zM33,38h1v1h-1zM42,38h7v1h-7zM12,39h1v1h-1zM16,39h1v1h-1zM24,39h4v1h-4zM31,39h1v1h-1zM40,39h3v1h-3zM17,40h1v1h-1zM24,40h3v1h-3zM38,40h2v1h-2zM10,41h1v1h-1zM18,41h2v1h-2zM24,41h2v1h-2zM20,42h1v1h-1zM21,43h1v1h-1zM29,44h2v1h-2zM28,45h1v1h-1zM27,46h1v1h-1z";

export function SamLogo({ size = 22 }: { size?: number }) {
  const radius = (46 / 200) * size;

  return (
    <span
      className="relative shrink-0 overflow-hidden"
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        backgroundColor: MOSS,
      }}
      aria-hidden
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 55 59"
        shapeRendering="crispEdges"
        className="absolute"
        style={{
          left: `${(-35 / 200) * 100}%`,
          top: `${(17 / 200) * 100}%`,
          width: `${(278 / 200) * 100}%`,
          height: `${(298 / 200) * 100}%`,
        }}
      >
        <path d={INK_PATH} fill={INK} />
        <path d={FACE_PATH} fill={PAPER} />
        <rect x="4" y="35" width="4" height="1" fill={BRASA} />
      </svg>
    </span>
  );
}
