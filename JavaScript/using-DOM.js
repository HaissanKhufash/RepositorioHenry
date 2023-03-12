const figureElements = [
    {
        title: 'Architecture',
        src: '/HTML/Assets/arch.jpg'
    },
    {
        title: 'Pets',
        src: '/HTML/Assets/pets.jpg'
    },
    {
        title: 'Sports',
        src: '/HTML/Assets/sports.jpg'
    },
    {
        title: 'Weather',
        src: '/HTML/Assets/weather.jpg'
    }
];

const $template = document.getElementById("template").content,
$nodefined_section = document.querySelector(".undefined-section"),
$fragment = document.createDocumentFragment();

export function showTopics(){
    figureElements.forEach(el => {
        let $img = $template.querySelector("img"),
        $figcaption = $template.querySelector("figcaption");
        $img.setAttribute("src", el.src);
        $img.setAttribute("alt", el.title);
        $figcaption.textContent = el.title;

        let clone = document.importNode($template, true);
        $fragment.appendChild(clone);
    });

    $nodefined_section.appendChild = $fragment;
}
