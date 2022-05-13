const box = document.querySelector('.box');
const button = document.querySelectorAll('.button')[1];
const btnClear = document.querySelector('#btnClear');
const input = document.querySelector('input');

button.addEventListener('click', () => {
  function getAnswer(question, obj) {
    const arr = question.toLowerCase().split(' ');
    const arrK = Object.keys(obj);
    const result = 'Извините, я не понял Ваш вопрос:( Но я с удовольствием расскажу, агрессивны ли джек-расселы, любят ли гонять уток и поддаются ли дрессировке :)';
    for (let i = 0; i < arr.length; i += 1) {
      for (let j = 0; j < arrK.length; j += 1) {
        if (arr[i].includes(arrK[j])) return obj[arrK[j]];
      }
    }
    return result;
  }

  function gotoBottom() {
    const block = document.getElementById('block');
    block.scrollTop = block.scrollHeight;
  }

  const answers = {
    живут: 'Средняя продолжительность жизни джек-расселов — 13-16 лет. Но считается, что мальчики этой породы живут дольше девочек',
    продолжительность: 'Средняя продолжительность жизни джек-расселов — 13-16 лет. Но считается, что мальчики этой породы живут дольше девочек.',
    зл: 'Могут проявлять агрессию по отношению к другим собакам.',
    другим: 'Могут проявлять агрессию по отношению к другим собакам.',
    кош: 'Могут проявлять агрессию по отношению к кошкам.',
    кот: 'Могут проявлять агрессию по отношению к кошкам.',
    пока: 'До новых встреч! :)',
    порода: 'Джек-рассел-терьер— порода охотничьих собак, выведенная в Великобритании.',
    рост: 'Вырастают до 20-30 см и обычно весят от 7 до 12 кг',
    высот: 'Вырастают до 20-30 см и обычно весят от 7 до 12 кг',
    вес: 'Вырастают до 20-30 см и обычно весят от 7 до 12 кг',
    масс: 'Вырастают до 20-30 см и обычно весят от 7 до 12 кг',
    ест: 'Натуральное питание либо сухие марочные корма премиум, либо супер-премиум класса для мелких гладкошёрстных пород в соответствии с возрастом. Не рекомендуется покупать дешёвые корма ниже категорий супер-премиум и холистик',
    едят: 'Натуральное питание либо сухие марочные корма премиум, либо супер-премиум класса для мелких гладкошёрстных пород в соответствии с возрастом. Не рекомендуется покупать дешёвые корма ниже категорий супер-премиум и холистик',
    корм: 'Натуральное питание либо сухие марочные корма премиум, либо супер-премиум класса для мелких гладкошёрстных пород в соответствии с возрастом. Не рекомендуется покупать дешёвые корма ниже категорий супер-премиум и холистик',
    шерст: 'У джек-рассел-терьера бывает 3 типа шерсти: гладкая, брокен (с изломом), жёсткая.',
    цвет: 'Окрас с доминирующим белым фоном и чёрными и/или рыжими пятнами.',
    окрас: 'Окрас с доминирующим белым фоном и чёрными и/или рыжими пятнами.',
    энерг: 'Энергичный джек-рассел нуждается в активном движении и дрессировке, он любит полаять и, благодаря своим охотничьим инстинктам, испытывает потребность в изучении окружающей территории, из-за чего может убегать.',
    дви: 'Энергичный джек-рассел нуждается в активном движении и дрессировке, он любит полаять и, благодаря своим охотничьим инстинктам, испытывает потребность в изучении окружающей территории, из-за чего может убегать.',
    гул: 'Гулять нужно минимум 2 часа в день. И это должны быть не просто выгулы «по делам» — а полноценные тренировки.',
    лай: 'Так как джек-рассел это терьер, который был выведен, чтобы выгонять свою добычу из нор, он может много лаять. При этом эти собаки очень бдительные, и из них получаются прекрасные сторожа.',
    нор: 'Так как джек-рассел это терьер, который был выведен, чтобы выгонять свою добычу из нор, он может много лаять. При этом эти собаки очень бдительные, и из них получаются прекрасные сторожа.',
    рыть: 'Рытье для джек-рассел-терьера в порядке вещей, особенно если он решил, что его задача — избавить ваш двор от грызунов!',
    мыш: 'Охотничий инстинкт в сочетании с высоким уровнем энергии делают дрессировку обязательной для этой породы.',
    уток: 'Охотничий инстинкт в сочетании с высоким уровнем энергии делают дрессировку обязательной для этой породы.',
    утками: 'Охотничий инстинкт в сочетании с высоким уровнем энергии делают дрессировку обязательной для этой породы.',
    охот: 'Охотничий инстинкт в сочетании с высоким уровнем энергии делают дрессировку обязательной для этой породы.',
    тело: 'У этих собак компактное, мускулистое телосложение.',
    лаять: 'Так как джек-рассел это терьер, который был выведен, чтобы выгонять свою добычу из нор, он может много лаять. При этом эти собаки очень бдительные, и из них получаются прекрасные сторожа.',
    лает: 'Так как джек-рассел это терьер, который был выведен, чтобы выгонять свою добычу из нор, он может много лаять. При этом эти собаки очень бдительные, и из них получаются прекрасные сторожа.',
    лают: 'Так как джек-рассел это терьер, который был выведен, чтобы выгонять свою добычу из нор, он может много лаять. При этом эти собаки очень бдительные, и из них получаются прекрасные сторожа.',
    агресс: 'Из-за своего природного напористого и упрямого характера они могут не переносить присутствие в семье маленьких детей и других животных. В особенности, они могут проявлять агрессию по отношению к другим собакам.',
    квартир: 'Если джек-рассел живет в квартире, ежедневные очень активные прогулки для него обязательны!',
    дом: 'Джек-рассел-терьеру нужна постоянная физическая активность, поэтому лучше всего ему подойдет дом с большим, огороженным забором двором.',
    актив: 'Джек-рассел любит сопровождать хозяев в походах и бегать за различными предметами. Эта порода не подойдет вам, если вы предпочитаете собаку, которая целый день будет мирно сидеть на диване.',
    особенност: 'Джек-расселов называют «живчиками», «вечными двигателями», «энерджайзерами» и «неугомонными занозами». Если соединить всё вместе – получится типичный представитель породы, требующий постоянного внимания и заботы.',
    характер: 'Джек-расселов называют «живчиками», «вечными двигателями», «энерджайзерами» и «неугомонными занозами». Если соединить всё вместе – получится типичный представитель породы, требующий постоянного внимания и заботы.',
    энер: 'Джек-расселов называют «живчиками», «вечными двигателями», «энерджайзерами» и «неугомонными занозами». Если соединить всё вместе – получится типичный представитель породы, требующий постоянного внимания и заботы.',
    вниман: 'Джек расселов называют «живчиками», «вечными двигателями», «энерджайзерами» и «неугомонными занозами». Если соединить всё вместе – получится типичный представитель породы, требующий постоянного внимания и заботы.',
    игрушки: 'Можете давать различные игрушки, менять их, но не слишком часто – джеку нужны две-три любимые вещи, с которыми он никогда не расстанется, и периодически будет приносить их хозяину сам. Лучше всего зарекомендовали себя пластиковые тарелки и теннисные мячики.',
    игры: 'Очень любят плавать и играть в мяч. Обожают внимание и игры, вытаскивать камни из водоемов :)))',
    играть: 'Очень любят плавать и играть в мяч. Обожают внимание и игры, вытаскивать камни из водоемов :)))',
    мяч: 'Очень любят плавать и играть в мяч. Обожают внимание и игры, вытаскивать камни из водоемов :)))',
    плав: 'Очень любят плавать и играть в мяч. Обожают внимание и игры, вытаскивать камни из водоемов :)))',
    ителлект: 'Несмотря на игривый неугомонный нрав, это интеллектуальная порода, ей жизненно необходимо изучать местность и запоминать разные пути от дома и обратно, чтобы не потеряться.',
    трен: 'Чередуйте голосовые и физические тренировки во время игр. Не просто кидайте мяч или тарелку, обязательно произносите сопутствующую команду. Голос хозяина должен уверенно звучать в каждой ситуации.',
    рыч: 'Реагируйте на малейшие проявления агрессии строгим наказанием. Джек запомнит единожды пропущенное рычание или лай, и будет пользоваться ситуацией, пока человек не видит. Особенно это важно, если в доме есть ребёнок.',
    повод: 'Поводок или ринговка должны быть из прочной синтетической ткани, рекомендуется средняя длина, чтобы контролировать бег',
    дет: 'С детьми воспитанный джек-рассел-терьер отлично ладит. Он с радостью играет с ними в подвижные игры, но не является нянькой, ему самому порой мало человеческого внимания и заботы.',
    морд: 'Незначительно короче черепа. Переход от морды ко лбу заметен сразу, но выделен не очень резко.',
    уши: 'Небольшого размера, имеют залом спереди. Кончики висячие, V-образной формы. Очень подвижные, угол поворота может достигать 180 градусов.',
    воспит: 'Считается, что дрессировка собак этой породы не требует от хозяина особых усилий, но это совершенно не значит, что можно легко обойтись и без нее: невоспитанный джек-рассел превращается в неуправляемого упрямого разрушителя.',
    разруш: 'Считается, что дрессировка собак этой породы не требует от хозяина особых усилий, но это совершенно не значит, что можно легко обойтись и без нее: невоспитанный джек-рассел превращается в неуправляемого упрямого разрушителя.',
    грыз: 'От скуки и отсутствия занятий этот милый песик превращается в ураган, который сметает все на своем пути, начиная с обуви и заканчивая предметами интерьера.',
    мебел: 'От скуки и отсутствия занятий этот милый песик превращается в ураган, который сметает все на своем пути, начиная с обуви и заканчивая предметами интерьера.',
    кинолог: 'Если вы обзавелись щенком этой породы, то ему точно не помешает работа с кинологом. Можно пройти общий курс дрессировки и послушания, посещая групповые занятия или брать индивидуальные уроки. Но это не освободит вас от работы с собакой. Помните, что кроме профессионального кинолога пса должен воспитывать хозяин. А для этого нужно наладить с ним связь и контакт.',
    проблем: 'Самыми частыми проблемами, с которыми встречаются владельцы этой породы, являются их упрямый характер, а также громкий лай и порча имущества.',
    минус: 'Самыми главными минусами, с которыми встречаются владельцы этой породы, являются их упрямый характер, а также громкий лай и порча имущества.',
    ум: 'Джек-рассел-терьер хорошо поддается дрессировке, так как любит взаимодействовать с хозяином. Эти псы смекалистые и быстро обучаются. В процессе дрессировки используйте лакомства, чтобы подкрепить правильные действия вашего четвероногого любимца. Это станет дополнительным стимулом для успешных занятий.',
    дресс: 'Джек-рассел-терьер хорошо поддается дрессировке, так как любит взаимодействовать с хозяином. Эти псы смекалистые и быстро обучаются. В процессе дрессировки используйте лакомства, чтобы подкрепить правильные действия вашего четвероногого любимца. Это станет дополнительным стимулом для успешных занятий.',
    команд: 'Джек-рассел-терьер хорошо поддается дрессировке, так как любит взаимодействовать с хозяином. Эти псы смекалистые и быстро обучаются.',
    мыть: 'Купаться джек-расселы любят, но мыть их достаточно 1–2 раза в месяц, и то при необходимости.',
    лин: 'Эти собаки линяют дважды в год, процесс длится около месяца. Волоски шерсти довольно жесткие, они похожи на маленькие иголки. Будьте готовы к тому, что их придется снимать с одежды и мебели.',
    бег: 'Владелец может брать питомца с собой на ежедневные пробежки — это пойдет собаке только на пользу и будет встречено с энтузиазмом.',
    пробеж: 'Владелец может брать питомца с собой на ежедневные пробежки — это пойдет собаке только на пользу и будет встречено с энтузиазмом.',
    подойдет: 'Если вы много работаете, то эта порода вам не подойдет. Ей необходимы постоянные физические нагрузки и долгие прогулки. Если вы любите кататься на велосипеде, то джек-рассел-терьер с удовольствием будет сопровождать вас. Пес подходит для людей молодых и энергичных, для пожилых он будет не лучшим компаньоном.',
    вело: 'Если вы много работаете, то эта порода вам не подойдет. Ей необходимы постоянные физические нагрузки и долгие прогулки. Если вы любите кататься на велосипеде, то джек-рассел-терьер с удовольствием будет сопровождать вас. Пес подходит для людей молодых и энергичных, для пожилых он будет не лучшим компаньоном.',
    работ: 'Если вы много работаете, то эта порода вам не подойдет. Ей необходимы постоянные физические нагрузки и долгие прогулки. Если вы любите кататься на велосипеде, то джек-рассел-терьер с удовольствием будет сопровождать вас. Пес подходит для людей молодых и энергичных, для пожилых он будет не лучшим компаньоном.',
    пожил: 'Если вы много работаете, то эта порода вам не подойдет. Ей необходимы постоянные физические нагрузки и долгие прогулки. Если вы любите кататься на велосипеде, то джек-рассел-терьер с удовольствием будет сопровождать вас. Пес подходит для людей молодых и энергичных, для пожилых он будет не лучшим компаньоном.',
    цен: 'Стоимость щенка данной породы может быть разной. Разброс цен вас точно удивит. Это может быть, как 10 тысяч рублей, так и 100.',
    стои: 'Стоимость щенка данной породы может быть разной. Разброс цен вас точно удивит. Это может быть, как 10 тысяч рублей, так и 100.',
    фильм: 'О, это же собака из "Маски"!',
    маска: 'О, это же собака из "Маски"!',
    майло: 'О, это же собака из "Маски"!',
    спать: 'Cпят примерно 12–14 часов в сутки. Получается, что 50% времени собаки дремлют, 30% — бодрствуют и просто валяются, и 20% — ведут активный образ жизни.',
    спит: 'Cпят примерно 12–14 часов в сутки. Получается, что 50% времени собаки дремлют, 30% — бодрствуют и просто валяются, и 20% — ведут активный образ жизни.',
    спят: 'Cпят примерно 12–14 часов в сутки. Получается, что 50% времени собаки дремлют, 30% — бодрствуют и просто валяются, и 20% — ведут активный образ жизни.',
    предан: 'Джек-рассел - это собака-компаньон, которая пойдет за хозяином хоть на край света!',
    компан: 'Джек-рассел - это собака-компаньон, которая пойдет за хозяином хоть на край света!',
    фото: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Flapkins.ru%2Fupload%2Fiblock%2Fcce%2Fcce746f24fbf7dbf7b3365e1b247ee9a.jpg&imgrefurl=https%3A%2F%2Flapkins.ru%2Fdog%2Fdzhek-rassel-terer%2F&tbnid=pDlDEFSb9F5G7M&vet=12ahUKEwiE_ILAm9r3AhUIxosKHXEsAA4QMygGegUIARDlAQ..i&docid=VMNChpp7kGMdXM&w=1024&h=600&q=джек%20рассел%20фото&client=safari&ved=2ahUKEwiE_ILAm9r3AhUIxosKHXEsAA4QMygGegUIARDlAQ',
  };

  if (input.value) {
    const text = input.value;
    const divQu = document.createElement('div');
    divQu.textContent = text;
    // divQu.style.marginLeft = '100px';
    divQu.style.marginRight = '10px';
    divQu.style.marginBottom = '5px';
    divQu.style.borderRadius = '10px';
    divQu.style.padding = '5px';
    divQu.wordBreak = 'break-all';
    divQu.style.backgroundColor = 'rgb(118, 166, 232)';
    divQu.style.alignSelf = 'flex-end';
    if (text.length <= 15) {
      divQu.style.width = '80px';
    }
    divQu.style.minWidth = '100px';
    divQu.style.maxWidth = '200px';
    divQu.style.wordBreak = 'break-all';
    divQu.style.padding = '3px';
    divQu.style.textAlign = 'center';
    box.append(divQu);

    const divAn = document.createElement('div');
    divAn.textContent = getAnswer(text, answers);
    divAn.style.marginRight = '100px';
    divAn.alignSelf = 'flex-start';
    divAn.wordBreak = 'break-all';
    divAn.style.marginLeft = '10px';
    divAn.style.borderRadius = '10px';
    divAn.style.padding = '5px';
    divAn.style.backgroundColor = 'rgb(41, 205, 169)';
    divAn.style.minWidth = '200px';
    divAn.style.textAlign = 'center';
    divQu.style.marginTop = '15px';
    box.append(divAn);
    input.value = '';
    gotoBottom();
  }
});

btnClear.addEventListener('click', () => {
  box.innerHTML = '';
});
