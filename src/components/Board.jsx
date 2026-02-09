import React, { use, useRef, useState, useEffect, useCallback, useMemo, useContext } from "react";
import { Card } from "./Card";
import { ThemeContext } from "../context/ThemeContext";

// const icons = ["😂", "💕", "😁", "🍕", "🐳", "🤢", "😻", "🐙"];


export function Board() {

    const { themeDark} = useContext(ThemeContext)

    // O estado restarted é usado para forçar a atualização do componente quando o jogo é reiniciado,
    // o que por sua vez vai gerar novos ícones e cartas
    const [restarted, restart] = useState(0);

    // Vai pegar 8 ícones aleatórios do array, duplicar eles e embaralhar o resultado
    const icons = useMemo(() => [
        "😂", "💕", "😁", "🍕", "🐳", "🤢", "😻", "🐙",
        "🦄", "🐝", "🦋", "🐢", "🦜", "🦥", "🦩", "🦦",
        "🌵", "🌴", "🌸", "🌼", "🍁", "🍄", "🌙", "☄️",
        "🧊", "🧿", "🪄", "🎈", "🎀", "🎁", "🎲", "🪁",
        "🧸", "🪅", "🎻", "🥁", "🎺", "🎷", "🪕", "🎹",
        "🛹", "🛼", "⛸️", "🥌", "🏹", "🥏", "🪂", "🤿",
        "🚲", "🛵", "🚁", "🛸", "⛵", "🚤", "🗺️", "🧭",
        "🏕️", "🗽", "🗼", "🎡", "🎢", "🏖️", "🏜️", "🌋",
        "🧪", "🧫", "🧬", "🔬", "🛰️", "💾", "🖨️", "⌨️",
        "🧯", "🔒", "🗝️", "📎", "🗂️", "🧾", "📮", "🪙",
        "🕯️", "🪔", "🛎️", "🧹", "🪣", "🧼", "🧽", "🚿",
        "🪞", "🛁", "🛋️", "🪑", "🚪", "🪟", "🧱", "🏺",
        "🍉", "🧁", "🍿", "🧃"
    ].sort(() => Math.random() - 0.5).slice(0, 8), [restarted]);

    // A função getCards é usada para gerar as cartas do jogo, duplicando os ícones e embaralhando o resultado
    const getCards = useCallback(() => {
        return [...icons, ...icons]
            .sort(() => Math.random() - 0.5) // Embaralha as cartas
            .map((icon, index) => ({
                index,
                icon,
                showing: false, // Controle de estado para saber se o cartão está virado ou não
                selected: false,
                matched: false,
            }))
    })
    
    const [cards, setCards] = useState(getCards());
    const [verifying, setVerifying] = useState(false);
    const restartButton = useRef(null);

    // A função onClick é usada para lidar com o clique em uma carta, 
    // virando a carta e verificando se duas cartas foram selecionadas
    const onClick = useCallback((card) => {
        if (card.selected || card.matched || verifying) {
            return;
        }

        const cardIndex = cards.findIndex((c) => c.index === card.index);
        cards[cardIndex].showing = !cards[cardIndex].showing;

        cards[cardIndex].selected = true;

        const selectedCards = cards.filter((c) => c.selected);
        if (selectedCards.length === 2) {
            setVerifying(true);
        }

        setCards([...cards]); // Cria um novo array para forçar a atualização do estado
    })

    // Efeito para verificar se as cartas selecionadas são iguais
    useEffect(() => {
        if (!verifying) return;

        const selectedCards = cards.filter((c) => c.selected);
        selectedCards[0].selected = false;
        selectedCards[1].selected = false;
        if (selectedCards[0].icon === selectedCards[1].icon) {
            selectedCards[0].matched = true;
            selectedCards[1].matched = true;
            setCards([...cards]); // Cria um novo array para forçar a atualização do estado
            setVerifying(false);
            winCheck();
        } else {
            setTimeout(() => {
                selectedCards[0].showing = false;
                selectedCards[1].showing = false;
                setCards([...cards]); // Cria um novo array para forçar a atualização do estado
                setVerifying(false);
            }, 1000); // 1 segundo
        }
    }, [verifying]);

    // A função winCheck é usada para verificar se todas as cartas foram combinadas, 
    // o que significa que o jogador venceu o jogo
    function winCheck() {
        if (!cards.find((card) => !card.matched)) {
            setTimeout(
                () => restartButton.current.style.visibility = "hidden", 0);
            setTimeout(
                () => restartButton.current.style.visibility = "", 200);
            setTimeout(
                () => restartButton.current.style.visibility = "hidden", 400);
            setTimeout(
                () => restartButton.current.style.visibility = "", 600);
        }
    }

    // Efeito para gerar as cartas quando o componente é montado ou quando o estado restarted é atualizado
    useEffect(() => {
        setCards(getCards())
    }, [restarted]);

    // Quando o botão de reiniciar for clicado, ele vai gerar um novo número aleatório 
    // para forçar a atualização do estado restarted, o que por sua vez vai gerar novos ícones e cartas
    return (
        <div style={style(themeDark)}>
            <button ref={restartButton} style={styleResetButton(themeDark)} onClick={() => restart(Math.random())}>
                Reiniciar Jogo
            </button>
            {cards.map((card, index) => (
                <Card key={index} card={card} onClick={onClick} themeDark={themeDark}/>
            ))}
        </div>
    );
}

const style = themeDark => ({
    backgroundColor: themeDark ? "#2f2f2f" : "#ffffff",
    flexGrow: 1,
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(4, 1fr)",
    gap: "1em",
    padding: "1em",
});

const styleResetButton = themeDark => ({
    position: "absolute",
    right: ".8em",
    top: ".5em",
    padding: "1em",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1.2em",
});
