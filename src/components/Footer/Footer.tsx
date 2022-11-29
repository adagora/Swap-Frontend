/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/anchor-has-content */
import logo from '../../assets/Elements/logo.svg';

export default function Footer() {
  return (
    <div
      style={{
        marginTop: '30px',
        marginBottom: '30px',
        paddingTop: '25px',
        width: '100%',
        display: 'flex',
        margin: 'auto',
        maxWidth: '1335px',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '2px solid #6875f5',
        color: 'rgb(162, 162, 168)',
        lineHeight: '1.4',
        fontSize: '14px'
      }}
    >
      <div
        style={{
          flex: '25% 1',
          display: 'flex',
          flexDirection: 'row',
          maxWidth: '450px',
          alignContent: 'center',
          alignItems: 'center',
          marginLeft: '12px'
        }}
      >
        <img
          src={logo}
          style={{
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            margin: '0 auto',
            width: '120px'
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          gap: '100px'
        }}
      >
        <ul style={{ listStyleType: 'none' }}>
          <li
            style={{
              fontWeight: 'normal',
              color: 'rgb(244, 244, 245)',
              lineHeight: '1.5'
            }}
          >
            Team
          </li>
          <span style={{ cursor: 'pointer' }}>
            <li>About</li>
          </span>
        </ul>

        <ul style={{ listStyleType: 'none' }}>
          <li
            style={{
              fontWeight: 'normal',
              color: 'rgb(244, 244, 245)',
              lineHeight: '1.5'
            }}
          >
            Support
          </li>
          <span style={{ cursor: 'pointer' }}>
            <li>Documentation</li>
            <li>FAQ</li>
          </span>
        </ul>

        <ul style={{ listStyleType: 'none' }}>
          <li
            style={{
              fontWeight: 'normal',
              color: 'rgb(244, 244, 245)',
              lineHeight: '1.5'
            }}
          >
            Social
          </li>
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer'
            }}
          >
            <a
              href="https://twitter.com/nightowlcasino"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'rgb(58, 186, 180)' }}
            >
              <svg
                style={{
                  userSelect: 'none',
                  display: 'inline-block',
                  fill: 'currentcolor',
                  flexShrink: '0',
                  transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                  fontSize: '1.5rem',
                  width: '38px',
                  height: '38px',
                  color: '#6875f5'
                }}
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-l5aar2"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
              </svg>
            </a>
            <a
              href="https://discord.gg/QDG5PGgQHA"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'rgb(58, 186, 180)' }}
            >
              <svg
                style={{
                  userSelect: 'none',
                  display: 'inline-block',
                  fill: 'currentcolor',
                  flexShrink: '0',
                  transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                  fontSize: '1.5rem',
                  width: '38px',
                  height: '38px',
                  color: '#6875f5'
                }}
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-l5aar2"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m24.242 9.115c-2.865-2.144-5.61-2.084-5.61-2.084l-.28.321c3.406 1.022 4.989 2.524 4.989 2.524-4.873-2.683-11.079-2.663-16.148 0 0 0 1.643-1.583 5.249-2.604l-.2-.241c0 0-2.725-.06-5.609 2.084 0 0-2.885 5.189-2.885 11.58 0 0 1.683 2.885 6.111 3.025 0 0 .741-.882 1.342-1.643-2.544-.761-3.506-2.344-3.506-2.344 1.599 1 3.215 1.626 5.229 2.023 3.277.674 7.353-.019 10.398-2.023 0 0-1.002 1.623-3.626 2.364.601 .741 1.322 1.603 1.322 1.603 4.427-.14 6.11-3.025 6.11-3.005 0-6.391-2.885-11.58-2.885-11.58zm-12.541 9.717c-1.122 0-2.044-.982-2.044-2.204.082-2.927 4.026-2.918 4.087 0 0 1.222-.902 2.204-2.043 2.204zm7.312 0c-1.122 0-2.043-.982-2.043-2.204.09-2.921 3.984-2.922 4.087 0 0 1.222-.901 2.204-2.044 2.204z" />
              </svg>
            </a>
            <a
              href="https://github.com/nightowlcasino"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'rgb(58, 186, 180)' }}
            >
              <svg
                style={{
                  userSelect: 'none',
                  display: 'inline-block',
                  fill: 'currentcolor',
                  flexShrink: '0',
                  transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                  fontSize: '1.5rem',
                  width: '38px',
                  height: '38px',
                  color: '#6875f5'
                }}
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-l5aar2"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
              </svg>
            </a>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'rgb(58, 186, 180)' }}
            >
              <svg
                style={{
                  userSelect: 'none',
                  display: 'inline-block',
                  fill: 'currentcolor',
                  flexShrink: '0',
                  transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                  fontSize: '1.5rem',
                  width: '38px',
                  height: '38px',
                  color: '#6875f5'
                }}
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-l5aar2"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.153 15.71C11.631 13.759 14.616 12.473 16.11 11.852 20.376 10.078 21.262 9.77 21.84 9.759 21.967 9.757 22.251 9.789 22.435 9.938 22.591 10.064 22.633 10.234 22.654 10.354 22.674 10.473 22.7 10.746 22.68 10.959 22.448 13.387 21.448 19.281 20.939 22.002 20.724 23.153 20.3 23.539 19.89 23.576 18.998 23.658 18.32 22.987 17.456 22.421 16.105 21.534 15.341 20.983 14.029 20.118 12.512 19.119 13.495 18.569 14.359 17.672 14.586 17.437 18.516 13.862 18.592 13.538 18.601 13.497 18.61 13.346 18.52 13.266 18.431 13.186 18.298 13.214 18.202 13.235 18.067 13.266 15.907 14.694 11.723 17.518 11.11 17.939 10.555 18.144 10.058 18.133 9.509 18.121 8.454 17.823 7.67 17.568 6.708 17.255 5.944 17.09 6.01 16.559 6.045 16.282 6.426 16 7.153 15.71Z" />
              </svg>
            </a>
          </span>
        </ul>
      </div>
    </div>
  );
}
