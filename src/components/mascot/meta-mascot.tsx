"use client";

import { useId } from "react";
import type { CSSProperties } from "react";

type MetaMascotProps = {
  badge?: string;
  glow?: string;
  subtitle?: string;
  title?: string;
  variant?: "hero" | "card" | "mini";
};

export function MetaMascot({
  badge = "Avatar activo",
  glow = "rgba(76, 255, 230, 0.34)",
  subtitle = "Listo para saltar contigo hacia la siguiente recompensa.",
  title = "Hola, soy Meta.",
  variant = "hero"
}: MetaMascotProps) {
  const instanceId = useId().replace(/:/g, "");
  const headGradientId = `mascot-head-${instanceId}`;
  const bodyGradientId = `mascot-body-${instanceId}`;
  const limbGradientId = `mascot-limb-${instanceId}`;
  const hatGradientId = `mascot-hat-${instanceId}`;
  const glowGradientId = `mascot-glow-${instanceId}`;
  const flowerGradientId = `mascot-flower-${instanceId}`;

  return (
    <div
      className={`mascotScene mascotScene--${variant}`}
      style={{ "--mascot-glow": glow } as CSSProperties}
    >
      <div className="mascotAura" />

      {variant === "hero" ? (
        <>
          <span className="mascotToken mascotTokenSpark">+25 XP</span>
          <span className="mascotToken mascotTokenCoin">Spark x3</span>
          <span className="mascotToken mascotTokenLive">Racha live</span>
        </>
      ) : null}

      <div className="mascotStage">
        <svg
          aria-label="Mascota animada de MetaAcademy"
          className="mascotSvg"
          role="img"
          viewBox="0 0 360 460"
        >
          <defs>
            <radialGradient id={headGradientId} cx="54%" cy="34%" r="72%">
              <stop offset="0%" stopColor="#fbfffe" />
              <stop offset="0.44" stopColor="#d9fbf6" />
              <stop offset="0.82" stopColor="#86f0ef" />
              <stop offset="1" stopColor="#49e1ea" />
            </radialGradient>
            <radialGradient id={bodyGradientId} cx="52%" cy="28%" r="72%">
              <stop offset="0%" stopColor="#f8fffd" />
              <stop offset="0.5" stopColor="#d5faf5" />
              <stop offset="0.86" stopColor="#78edef" />
              <stop offset="1" stopColor="#48dfe8" />
            </radialGradient>
            <radialGradient id={limbGradientId} cx="50%" cy="30%" r="72%">
              <stop offset="0%" stopColor="#f8fffd" />
              <stop offset="0.54" stopColor="#d7faf6" />
              <stop offset="1" stopColor="#53e0ea" />
            </radialGradient>
            <linearGradient id={hatGradientId} x1="90" x2="246" y1="32" y2="138">
              <stop stopColor="#434857" />
              <stop offset="1" stopColor="#2f3442" />
            </linearGradient>
            <radialGradient id={glowGradientId} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
            <radialGradient id={flowerGradientId} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fff9d8" />
              <stop offset="100%" stopColor="#ffd978" />
            </radialGradient>
          </defs>

          <ellipse className="mascotShadow" cx="180" cy="413" rx="72" ry="17" />

          <g className="mascotFigure">
            <ellipse cx="180" cy="346" fill={`url(#${glowGradientId})`} opacity="0.14" rx="108" ry="56" />

            <g className="mascotHat">
              <path d="M66 82L180 18L294 82L180 145L66 82Z" fill={`url(#${hatGradientId})`} />
              <path
                d="M117 78C117 53 145 38 180 38C215 38 243 53 243 78V127H117V78Z"
                fill={`url(#${hatGradientId})`}
              />
              <path
                d="M117 126C127 114 148 108 180 108C212 108 233 114 243 126"
                fill="none"
                opacity="0.18"
                stroke="#191d27"
                strokeWidth="3"
              />
              <path d="M181 44V127" fill="none" opacity="0.2" stroke="#171b25" strokeWidth="3" />
            </g>

            <g className="mascotTassel">
              <path
                d="M103 82C103 114 103 145 103 170"
                fill="none"
                stroke="#e2b54f"
                strokeLinecap="round"
                strokeWidth="6"
              />
              <ellipse cx="103" cy="176" fill="#dfb44c" rx="11" ry="13" />
              <path
                d="M103 188C95 210 89 240 86 285"
                fill="none"
                stroke="#e8c567"
                strokeLinecap="round"
                strokeWidth="6"
              />
              <path
                d="M63 286C77 266 90 262 103 264C116 262 129 266 143 286C130 296 123 320 119 345H87C83 320 76 296 63 286Z"
                fill="#e8c76a"
              />
            </g>

            <g className="mascotHead">
              <ellipse cx="180" cy="156" fill={`url(#${headGradientId})`} rx="89" ry="92" />
              <ellipse cx="149" cy="112" fill="#ffffff" opacity="0.16" rx="29" ry="18" />
              <ellipse cx="128" cy="179" fill="#f3dcaa" opacity="0.92" rx="15" ry="17" />
              <ellipse cx="232" cy="179" fill="#f3dcaa" opacity="0.92" rx="15" ry="17" />
            </g>

            <g className="mascotBrows">
              <path
                d="M136 135C147 126 160 124 171 128"
                fill="none"
                opacity="0.34"
                stroke="#48afd0"
                strokeLinecap="round"
                strokeWidth="9"
              />
              <path
                d="M224 135C213 126 200 124 189 128"
                fill="none"
                opacity="0.34"
                stroke="#48afd0"
                strokeLinecap="round"
                strokeWidth="9"
              />
            </g>

            <g className="mascotFace">
              <g className="mascotEyes">
                <g>
                  <ellipse cx="146" cy="174" fill="#f9fdff" rx="26" ry="29" />
                  <ellipse cx="153" cy="178" fill="#0f1721" rx="15" ry="18" />
                  <ellipse cx="158" cy="171" fill="#4ccff6" rx="8" ry="9" />
                  <circle cx="162" cy="166" fill="#ffffff" r="4" />
                </g>
                <g>
                  <ellipse cx="214" cy="174" fill="#f9fdff" rx="26" ry="29" />
                  <ellipse cx="207" cy="178" fill="#0f1721" rx="15" ry="18" />
                  <ellipse cx="202" cy="171" fill="#4ccff6" rx="8" ry="9" />
                  <circle cx="198" cy="166" fill="#ffffff" r="4" />
                </g>
              </g>

              <path
                d="M147 214C162 226 198 226 213 214"
                fill="none"
                stroke="#18c6c4"
                strokeLinecap="round"
                strokeWidth="7.5"
              />
            </g>

            <g className="mascotBody">
              <path
                d="M180 221C155 221 136 233 129 255C120 281 120 338 127 380C131 408 146 428 164 428H196C214 428 229 408 233 380C240 338 240 281 231 255C224 233 205 221 180 221Z"
                fill={`url(#${bodyGradientId})`}
              />
              <ellipse cx="180" cy="252" fill="#ffffff" opacity="0.14" rx="38" ry="18" />
            </g>

            <g className="mascotArm mascotArmLeft">
              <path
                d="M120 259C106 275 98 307 100 348C101 366 109 376 119 374C128 372 133 358 136 339C140 309 136 276 120 259Z"
                fill={`url(#${limbGradientId})`}
              />
              <ellipse cx="119" cy="373" fill={`url(#${limbGradientId})`} rx="13" ry="17" />
            </g>

            <g className="mascotArm mascotArmRight">
              <path
                d="M240 259C254 275 262 307 260 348C259 366 251 376 241 374C232 372 227 358 224 339C220 309 224 276 240 259Z"
                fill={`url(#${limbGradientId})`}
              />
              <ellipse cx="241" cy="373" fill={`url(#${limbGradientId})`} rx="13" ry="17" />
            </g>

            <g className="mascotLegs">
              <path
                d="M154 399C138 404 131 418 134 431C137 444 148 451 161 449C174 447 180 436 179 424C178 412 171 401 154 399Z"
                fill={`url(#${bodyGradientId})`}
              />
              <path
                d="M206 399C222 401 229 412 228 424C227 436 221 447 208 449C195 451 184 444 181 431C177 418 190 404 206 399Z"
                fill={`url(#${bodyGradientId})`}
              />
            </g>

            <g className="mascotFlower">
              <ellipse cx="180" cy="288" fill={`url(#${flowerGradientId})`} rx="12" ry="8" />
              <ellipse cx="180" cy="288" fill={`url(#${flowerGradientId})`} rx="12" ry="8" transform="rotate(45 180 288)" />
              <ellipse cx="180" cy="288" fill={`url(#${flowerGradientId})`} rx="12" ry="8" transform="rotate(90 180 288)" />
              <ellipse cx="180" cy="288" fill={`url(#${flowerGradientId})`} rx="12" ry="8" transform="rotate(135 180 288)" />
              <circle cx="180" cy="288" fill="#f4c542" r="8" />
            </g>
          </g>
        </svg>
      </div>

      {variant !== "mini" ? (
        <div className="mascotSpeech">
          <span className="mascotSpeechBadge">{badge}</span>
          <strong>{title}</strong>
          <p>{subtitle}</p>
        </div>
      ) : null}
    </div>
  );
}
