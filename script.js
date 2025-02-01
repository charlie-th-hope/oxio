:root {
    --background: #F9F6E8;  /* Main Background */
    --secondary-bg: #FFF9F6;
    --button-bg: #F9F6E8;
    --button-hover: #262626;
    --textColor: #333;
    --textHover: #FFFFFF;
    --disclaimerColor: #777;
}

body {
    font-family: Arial, sans-serif;
    background-color: var(--background);
    color: var(--textColor);
    margin: 0;
    padding: 0;
    text-align: center;
}

header {
    background-color: var(--secondary-bg);
    padding: 20px;
    color: black;
    font-size: 24px;
    font-weight: bold;
}

.nav-container {
    background: var(--background);
    padding: 10px 0;
}

.nav-menu {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 10px;
}

.nav-menu button {
    font-size: 16px;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 8px;
    background-color: var(--button-bg);
    border: 2px solid var(--textColor);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}

.nav-menu button.active, .nav-menu button:hover {
    background: var(--button-hover);
    color: var(--textHover);
}

.section {
    max-width: 600px;
    margin: 30px auto;
    padding: 20px;
    border-radius: 10px;
    text-align: left;
    background-color: var(--secondary-bg);
}

.hidden {
    display: none;
}

.copy-code {
    background-color: var(--secondary-bg);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
}

.copy-code img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
}

.referral-code {
    font-size: 24px;
    font-weight: bold;
    color: var(--textColor);
    margin: 10px 0;
}

#copyButton {
    background-color: var(--button-bg);
    color: var(--textColor);
    font-weight: bold;
    border: 2px solid var(--textColor);
    padding: 15px 30px;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
    text-decoration: none;
    display: inline-block;
}

#copyButton:hover {
    background-color: var(--button-hover);
    color: var(--textHover);
}

.footer {
    margin-top: 50px;
    padding: 100px 20px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.footer img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
}

.footer-button {
    background-color: var(--button-bg);
    color: var(--textColor);
    font-weight: bold;
    border: 2px solid var(--textColor);
    padding: 15px 30px;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    text-decoration: none;
    transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
}

.footer-button:hover {
    background-color: var(--button-hover);
    color: var(--textHover);
}
