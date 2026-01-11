const userLang = navigator.language.startsWith('es') ? 'es' : 'en';

fetch(`lang/${userLang}.json`)
  .then(res => res.json())
  .then(data => {
    // Title and intro
    document.getElementById('title').textContent = data.title;
    document.getElementById('description').textContent = data.intro;

    // Top 10 mistakes
    const mistakesList = document.getElementById('mistakes-list');
    mistakesList.innerHTML = '';
    data.mistakes.forEach(m => {
      const li = document.createElement('li');
      li.textContent = m;
      mistakesList.appendChild(li);
    });

    // Bonus section
    document.getElementById('bonus-title').textContent = data.bonus_title;
    document.getElementById('bonus-intro').textContent = data.bonus_intro;
    const bonusList = document.getElementById('bonus-list');
    bonusList.innerHTML = '';
    data.bonus.forEach(b => {
      const li = document.createElement('li');
      li.textContent = b;
      bonusList.appendChild(li);
    });

    // Improve section
    document.getElementById('improve-title').textContent = data.improve_title;
    document.getElementById('improve-intro').textContent = data.improve_intro;
    document.getElementById('improve-ci').innerHTML = `<strong>${data.improve_cicd.split(':')[0]}:</strong>${data.improve_cicd.split(':')[1]}`;
    document.getElementById('improve-manual').innerHTML = `<strong>${data.improve_manual.split(':')[0]}:</strong>${data.improve_manual.split(':')[1]}`;

    // Action buttons
    document.getElementById('install-cli').textContent = data.install_cli;
    document.getElementById('github-link').textContent = data.view_code;

    // Try now section
    document.getElementById('try-now').textContent = data.try_now;
    document.getElementById('upload-instruction').textContent = data.upload_swagger;

    // Tools section
    document.getElementById('tools-title').textContent = data.tools_title;
    document.getElementById('cli-label').textContent = data.tool_cli;
    document.getElementById('cli-link').textContent = data.tool_cli_link;
    document.getElementById('github-cli-label').textContent = data.tool_github;
    document.getElementById('github-cli-link').textContent = data.tool_github_link;
    document.getElementById('web-label').textContent = data.tool_web;
    document.getElementById('web-link').textContent = data.tool_web_link;
    document.getElementById('api-label').textContent = data.tool_api;
    document.getElementById('api-link').textContent = data.tool_api_link;

    // Support
    document.getElementById('support-text').textContent = data.support;
    document.getElementById('support-link').textContent = data.support_link;
  });
