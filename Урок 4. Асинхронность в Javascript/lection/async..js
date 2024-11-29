const getUser = async (url) => {
  //делаем запрос и ждем его результат (указание await), который будет сохранен в константу response

  const response = await fetch(url);

  //Выполняем ещзе один асинхронный метод, преобразования в текст, также ждем резутльтат, кторый сохраняется в константу пользователя.
  const user = await response.text();
  console.log(user);

}

getUser('https://api.github.com/users/octocat');