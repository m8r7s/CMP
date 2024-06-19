        // Fonction pour vérifier si le mot de passe est dans les listes de mots de passe courants
        function checkPassword(password) {
            if (passwords_france.includes(password)) {
                return "Le mot de passe est dans la liste française.";
            } else if (passwords_espagne.includes(password)) {
                return "Le mot de passe est dans la liste espagnole.";
            } else if (passwords_angleterre.includes(password)) {
                return "Le mot de passe est dans la liste anglaise.";
            } else {
                return estimateCrackingTime(password);
            }
        }

        // Fonction pour estimer le temps nécessaire pour craquer le mot de passe par brute force
        function estimateCrackingTime(password) {
            const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:'\",.<>?/";
            let attempts = 0;

            for (let length = 1; length <= password.length; length++) {
                for (let i = 0; i < Math.pow(characters.length, length); i++) {
                    attempts++;
                    const attempt = Array.from({ length }, (_, j) => characters[Math.floor(i / Math.pow(characters.length, j)) % characters.length]).join('');
                    if (attempt === password) {
                        // Estimation du temps basé sur 1 milliard de tentatives par seconde
                        const timeSeconds = attempts / 1e9;
                        return `Le mot de passe n'est pas dans les listes courantes.  Temps estimé pour craquer : ${timeSeconds.toFixed(2)} secondes.`;
                    }
                }
            }
        }

        // Vérification du mot de passe
        function testerMdp() {
            const password = document.getElementById("passwordInput").value;
            if (password) {
                const result = checkPassword(password);
                setInterval(consoleLoading(),2000)
                document.getElementById("resultconsole").innerText = "> " + result;

            } else {
                setInterval(consoleLoading(),2000)
                alert("Veuillez entrer un mot de passe.");
            }
        }

        document.addEventListener("DOMContentLoaded", () => {
            document.getElementById("button1").addEventListener("click", testerMdp);
        });