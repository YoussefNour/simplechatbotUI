var questionindex = 0;
const questions = [
  "مساء الخير يا فندم اخبارك ايه اتشرف بالاسم",
  "ممكن اعرف سن الطفل اللي هيلعب باللعبة ؟",
  "ممكن اعرف الطفل ولد و لا بنت ؟",
  "ايه هي المهارات اللي عايز تنميها عند الطفل باللعبة ؟",
  "حضرتك تفضل الخامة بتاعة اللعبة تكون ضد الكسر يعني من غير زجاج يتكسر و لا عادي ؟",
  "حضرتك تحب اللعبة من اني قسم مثلا القسم التعليمي او القسم الرياضي ؟",
  "حضرتك تحب تكون اللعبه ليها علاقه بنظام التعليم مونتيسوري ؟",
  "حضرتك تحب ادورلك في الاسعار من كام لكام ؟",
  `شكرا لوقتك انتهت الأسألة ممكن تزور موقع الصفوة لو نفسك فى لعبة لطفلك <a href="https://safwatoys.com/" target="_blank">https://safwatoys.com/</a>`,
];

const sendmessage = () => {
  let texts = document.getElementById("chat");
  if (questionindex < questions.length) {
    texts.innerHTML += outputmessage();
  }
  scrollToBottom("chat");
};

const receivemessage = () => {
  let input = document.getElementById("message").value;
  if (input != "") {
    let texts = document.getElementById("chat");
    texts.innerHTML += inputmessage(input);
    sendmessage(texts, questionindex);
  }
  document.getElementById("message").value = "";
};

const outputmessage = () => {
  return `<div class="outputmessage">
        <img class="messageprofile" src="/images/robot.jpg">
        <label>${questions[questionindex++]}</label>
    </div>`;
};

const inputmessage = (usermessage) => {
  return `<div class="inputmessage">
    <img class="messageprofile" src="/images/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg">
    <label>${usermessage}</label>
    </div>`;
};

function scrollToBottom (id) {
  var div = document.getElementById(id);
  div.scrollTop = div.scrollHeight - div.clientHeight;
}

// Make sure this code gets executed after the DOM is loaded.
document.querySelector("#message").addEventListener("keyup", (event) => {
  if (event.key !== "Enter") return; // Use `.key` instead.
  document.querySelector("#sendbutton").click(); // Things you want to do.
  event.preventDefault(); // No need to `return false;`.
});