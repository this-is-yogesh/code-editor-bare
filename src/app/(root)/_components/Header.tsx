import "../_styles/header.css";
import Link from "next/link";
import { Blocks, Code2, Sparkles } from "lucide-react";

const Header = function (): React.ReactNode {
  return (
    <div className="header">
      <div className="header-container">
        <div className="nav-left">
          <Link href="/" className="logo-link">
            <div className="logo-hover" />
            <div className="logo-icon">
              <Blocks className="logo-block-icon" />
            </div>
            <div className="logo-text">
              <div className="text1">CodeCraft</div>
              <div className="text2">Interactive Code Editor</div>
            </div>
          </Link>
          <nav className="nav-links">
            <Link href="/" className="nav-button">
              <div className="nav-button-bg" />
              <Code2 className="nav-icon" />
              <div className="nav-label">Snippets</div>
            </Link>
          </nav>
        </div>
        <div className="nav-right">right</div>
      </div>
    </div>
  );
};

export { Header };
