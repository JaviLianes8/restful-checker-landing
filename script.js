const userLang = navigator.language.startsWith('es') ? 'es' : 'en';

fetch(`lang/${userLang}.json`)
  .then(res => res.json())
  .then(data => {
    document.querySelector('h1').textContent = data.title;
    document.querySelector('p').textContent = data.intro;

    const ul = document.querySelector('ul');
    ul.innerHTML = ''; // limpiar por si acaso
    data.mistakes.forEach(m => {
      const li = document.createElement('li');
      li.textContent = m;
      ul.appendChild(li);
    });

    document.querySelector('h2').textContent = data.improve_title;
    document.querySelectorAll('p')[1].textContent = data.improve_intro;

    const lis = document.querySelectorAll('ul')[1].children;
    lis[0].innerHTML = `<strong>${data.improve_cicd.split(':')[0]}:</strong> ${data.improve_cicd.split(':')[1]}`;
    lis[1].innerHTML = `<strong>${data.improve_manual.split(':')[0]}:</strong> ${data.improve_manual.split(':')[1]}`;

    const actions = document.querySelector('.actions');
    actions.children[0].textContent = data.install_cli;
    actions.children[1].textContent = data.view_code;

    document.querySelectorAll('h2')[1].textContent = data.try_now;
    document.querySelectorAll('p')[2].textContent = data.upload_swagger;

    const tools = document.querySelectorAll('h2')[2];
    tools.textContent = data.tools_title;

    const toolList = document.querySelectorAll('ul')[2].children;
    toolList[0].innerHTML = `<strong>${data.tool_cli}</strong> <a href="https://pypi.org/project/restful-checker/" target="_blank">${data.tool_cli_link}</a>`;
    toolList[1].innerHTML = `<strong>${data.tool_github}</strong> <a href="https://github.com/JaviLianes8/restful-checker" target="_blank">${data.tool_github_link}</a>`;
    toolList[2].innerHTML = `<strong>${data.tool_web}</strong> <a href="https://restful-checker-website.vercel.app/" target="_blank">${data.tool_web_link}</a>`;
    toolList[3].innerHTML = `<strong>${data.tool_api}</strong> <a href="https://github.com/JaviLianes8/restful-checker-api" target="_blank">${data.tool_api_link}</a>`;

    const support = document.querySelectorAll('p')[3];
    support.innerHTML = `${data.support} <a href="https://buymeacoffee.com/jlianesglrs" target="_blank">${data.support_link}</a>`;
  });