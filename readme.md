Note: I'm always looking for ways to improve, so feel free to share your critiques and ideas with me ;)

# ShogunID Bot

This is a simple moderation bot that I created for the ShogunID Discord Server. I use this bot to practice making Discord bots using `discord.js`.

I have also created a simplified flowchart for the overall system of this bot. This is my first time using a flowchart for design, so please provide feedback.

<details>
    <summary>Flowchart</summary>
    <img src="https://github.com/Nacxht/shogunId-bot/blob/main/flowcharts/shogun_id-system_design.png?raw=true" alt="System Design">
</details>

# Feature

Here is a list and flowchart of the features of this bot:
**Moderation:**
<ul>
    <li>
        <details>
            <summary>Kick (yes voting system, but it's not done yet)</summary>
            <br />
            <img src="https://github.com/Nacxht/shogunId-bot/blob/main/flowcharts/shogun_id-bot_kick.png?raw=true" alt="Kick Flowchart">
        </details>
    </li>
    <li>
        <details>
            <summary>Ban</summary>
            <br />
            <img src="https://github.com/Nacxht/shogunId-bot/blob/main/flowcharts/shogun_id-bot_ban.png?raw=true" alt="Ban Flowchart">
        </details>
    </li>
    <li>
        <details>
            <summary>Purge</summary>
            <br />
            <img src="https://github.com/Nacxht/shogunId-bot/blob/main/flowcharts/shogun_id-bot_purge.png?raw=true" alt="Purge Flowchart">
        </details>
    </li>
    <li>
        <details>
            <summary>Timeout</summary>
            <br />
            <img src="https://github.com/Nacxht/shogunId-bot/blob/main/flowcharts/shogun_id-bot_timeout.png?raw=true" alt="Timeout Flowchart">
        </details>
    </li>
</ul>

**Other:**
<ul>
    <li>
        <details>
            <summary>Ping</summary>
            <br />
            <img src="" alt="Ping Flowchart">
        </details>
    </li>
    <li>
        <details>
            <summary>User Info</summary>
            <br />
            <img src="" alt="User Info Flowchart">
        </details>
    </li>
    <li>
        <details>
            <summary>Server Info</summary>
            <br />
            <img src="" alt="Server Info Flowchart">
        </details>
    </li>
    <li>
        <details>
            <summary>Avatar</summary>
            <br />
            <img src="" alt="Avatar Flowchart">
        </details>
    </li>
</ul>

# Dependencies
Here is a list of dependencies I use:
1. Main Dependencies
    - [discord.js](https://www.npmjs.com/package/discord.js)
    - [dotenv](https://www.npmjs.com/package/dotenv)
    - [ms](https://www.npmjs.com/package/ms)
    - [winston](https://www.npmjs.com/package/winston)
2. Dev Dependencies
    - [@types/ms](https://www.npmjs.com/package/@types/ms)
    - [@types/node](https://www.npmjs.com/package/@types/node)
    - [typescript](https://www.npmjs.com/package/typescript)
