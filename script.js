document.addEventListener("DOMContentLoaded", function () {
  async function makeList() {
    const { value: text } = await Swal.fire({
      input: "text",
      title: "Tulis nama kamu!!",
      inputPlaceholder: "Type your message here...",
      inputAttributes: {
        "aria-label": "Type your message here"
      },
    });

    if(text){
      Swal.fire({
        title: `Salam kenal ${text}`,
        text: 'Follow IG for more!! ig: @jak_zaki',
        icon: "success"
      });

      const friendList = document.getElementById('friend');
  
      const textList = document.createElement("li");
      textList.innerText = text;
  
      friendList.appendChild(textList);
    }
  }

  document.getElementById("addFriendButton").addEventListener("click", function(){
    makeList()
  });
});
