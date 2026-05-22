const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

  const button = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");
  const icon = item.querySelector(".icon");

  button.addEventListener("click", () => {

    const isOpen =
      button.getAttribute("aria-expanded") === "true";

    faqItems.forEach((faq) => {

      const btn = faq.querySelector(".faq-question");
      const ans = faq.querySelector(".faq-answer");
      const icn = faq.querySelector(".icon");

      btn.setAttribute("aria-expanded", "false");

      ans.classList.add("hidden");

      icn.textContent = "+";

      faq.classList.remove("active");

    });

    if (!isOpen) {

      button.setAttribute("aria-expanded", "true");

      answer.classList.remove("hidden");

      icon.textContent = "−";

      item.classList.add("active");

    }

  });

});