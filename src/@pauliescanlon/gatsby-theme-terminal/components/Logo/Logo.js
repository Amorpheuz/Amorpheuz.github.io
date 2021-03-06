/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

export const Logo = () => (
  <Link to="/">
    <div sx={{ height: "32px", overflow: "hidden" }}>
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158.1 32" height="32">
        <g id="Layer_2_1_">
          <g id="Layer_1-2">
            <path transform="rotate(-45 16.03311716 16.00028287)" sx={{ fill: "background" }} d="M4.7 4.7h22.6v22.6H4.7z"/>
            <path sx={{ fill: "secondary" }} d="M9.4 9.7s1.4 3.1 6.3-.2L11 14.2 9.4 9.7z"/>
            <path sx={{ fill: "success" }} d="M22.4 9.3s-3.1 1.4.2 6.3l-4.7-4.7 4.5-1.6z"/>
            <path sx={{ fill: "secondary" }} d="M22.7 22.3s-1.4-3.1-6.3.2l4.7-4.7 1.6 4.5z"/>
            <path sx={{ fill: "success" }} d="M9.7 22.7s3.1-1.4-.2-6.3l4.7 4.7-4.5 1.6z"/>
            <path sx={{ fill: "primary" }} d="M14.4 4.2h3.3v3.3h-3.3zM24.4 14.3h3.3v3.3h-3.3zM14.4 24.4h3.3v3.3h-3.3zM4.3 14.3h3.3v3.3H4.3z"/>
            <circle sx={{ fill: "success" }} cx="16.1" cy="13.4" r="1.2"/>
            <circle sx={{ fill: "secondary" }} cx="18.7" cy="16" r="1.2"/>
            <circle sx={{ fill: "secondary" }} cx="13.4" cy="16" r="1.2"/>
            <circle sx={{ fill: "success" }} cx="16" cy="18.6" r="1.2"/>
            <path sx={{ fill: "text" }} d="M45.3 22.1l-1.1-4h-5.9l-1.1 4h-2.4l4.8-16.5H43l4.7 16.5h-2.4zm-6.4-6.3h4.7l-2.2-8.3h-.2l-2.3 8.3zM60.4 10.2c.4.5.6 1.2.6 2.2v9.7h-2.5v-9.4c0-.3-.1-.7-.2-1-.2-.2-.4-.3-.7-.3-.8 0-1.2.6-1.2 1.7v9.1h-2.1v-9.6c0-.7-.3-1-1-1-.8 0-1.2.6-1.2 1.7v9h-2.5V9.7h2.2l.2 1.5h.2c0-.5.2-1 .6-1.3.4-.3 1-.5 1.5-.5s.9.1 1.3.5c.4.3.6.8.7 1.3h.2c0-.5.2-.9.6-1.3.4-.3.9-.5 1.5-.5.7.1 1.4.3 1.8.8zM66.3 21.5c-.8-.5-1.5-1.3-1.9-2.2-.4-1.1-.7-2.3-.6-3.5 0-1.2.2-2.4.6-3.5.4-.9 1-1.7 1.9-2.2 1.8-1 4-1 5.8 0 .8.5 1.5 1.3 1.9 2.2.4 1.1.7 2.3.6 3.5 0 1.2-.2 2.4-.6 3.5-.4.9-1 1.7-1.9 2.2-1.8 1-4 1-5.8 0zm5-2.5c.5-.7.7-1.8.7-3.1s-.2-2.4-.7-3.1c-.8-1.2-2.4-1.4-3.6-.6-.2.2-.5.4-.6.6-.5.7-.7 1.8-.7 3.1s.2 2.4.7 3.1c.8 1.2 2.4 1.4 3.6.6.3-.2.5-.4.6-.6zM88 10c.6.3 1 .9 1.2 1.5.3.9.4 1.8.4 2.7h-2.4c0-.9-.1-1.5-.4-1.9-.3-.4-.8-.6-1.3-.6-1 0-1.9.5-2.3 1.3-.5.9-.8 2.2-.8 3.8V20h3v2h-8.2v-2h2.7v-8.2h-2.3v-2h4.3l.4 3.2h.3c.1-1.1.4-2 1-2.6.6-.6 1.4-.8 2.4-.8.7-.1 1.4 0 2 .4zM100.7 10.2c.8.6 1.4 1.3 1.7 2.2.4 1.1.6 2.3.6 3.5 0 1.2-.2 2.3-.6 3.4-.3.9-.9 1.6-1.7 2.1-.8.5-1.7.8-2.7.7-.8 0-1.6-.2-2.3-.5-.6-.3-.9-.9-1-1.6h-.2v7.3H92V9.7h2.2l.2 2.2h.3c.1-.7.4-1.4 1-1.9.7-.4 1.5-.7 2.3-.6 1 .1 2 .3 2.7.8zm-.9 8.9c.5-.7.7-1.8.7-3.1 0-1.4-.2-2.5-.7-3.3-.4-.7-1.2-1.2-2.1-1.2-2.1 0-3.1 1.2-3.1 3.5v3c0 1.4 1 2.1 3.1 2.1.9.1 1.7-.3 2.1-1zM115.1 10.7c.7.8 1.1 1.9 1.1 3.4v8h-2.5v-8c0-.7-.2-1.3-.6-1.8-.4-.4-1-.7-1.6-.7-1.9 0-2.9 1.2-2.9 3.5V22h-2.5V4.6h2.5V12h.2c0-.7.3-1.4.9-1.9.5-.4 1.3-.6 2.4-.6 1.2 0 2.2.4 3 1.2zM130.4 17h-8.3c.2.9.7 1.8 1.5 2.3.9.6 1.9.9 3 .8 1 0 2-.1 3-.3l.3 2.2c-1.2.2-2.4.3-3.6.3-1.2 0-2.5-.2-3.6-.7-1-.5-1.7-1.2-2.2-2.2-.5-1.1-.8-2.3-.8-3.5 0-1.2.2-2.3.7-3.4.4-.9 1.1-1.7 1.9-2.2.9-.5 2-.8 3-.8 1.7 0 3 .5 3.9 1.5.9 1 1.4 2.5 1.4 4.4-.1.6-.2 1.1-.2 1.6zm-2.2-1.9c0-1.1-.3-1.9-.8-2.5-.6-.6-1.4-.9-2.2-.9-.9 0-1.7.3-2.3.9-.6.7-1 1.6-1 2.5h6.3zM145.5 20.1v2l-4 .1-.2-2.5h-.2c-.1.7-.5 1.4-1.1 1.9-.5.5-1.2.7-1.9.7-1.4 0-2.4-.4-3.2-1.1-.8-.8-1.1-1.9-1.1-3.3V9.5h2.4v8.4c0 .6.2 1.3.6 1.7 1.1.9 2.8.8 3.8-.3.5-.6.7-1.6.7-2.9V9.5h2.5v10.3l1.7.3zM150.8 20h7.2v2h-10.2v-2l7.2-8.2h-7.2v-2h10v2l-7 8.2z"/>
          </g>
        </g>
      </svg>
    </div>
  </Link>
);
