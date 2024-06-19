from browser import document
from browser.widgets.dialog import InfoDialog

# Importation des listes de mots de passe
from france import passwords_france
from espagne import passwords_espagne
from angleterre import passwords_angleterre


# Fonction pour vérifier si le mot de passe est dans les listes de mots de passe courants
def check_password(password):
    if password in passwords_france:
        return "Le mot de passe est dans la liste française."
    elif password in passwords_espagne:
       return "Le mot de passe est dans la liste espagnole."
    elif password in passwords_angleterre:
        return "Le mot de passe est dans la liste anglaise."
    else:
        return estimate_cracking_time(password)

# Fonction pour estimer le temps nécessaire pour craquer le mot de passe par brute force
def estimate_cracking_time(password):
    import itertools
    import string

    characters = string.ascii_letters + string.digits + string.punctuation
    attempts = 0

    for length in range(1, len(password) + 1):
        for attempt in itertools.product(characters, repeat=length):
            attempts += 1
            if ''.join(attempt) == password:
                # Estimation du temps basé sur 1 milliard de tentatives par seconde
                time_seconds = attempts / 1e9
                return f"Le mot de passe n'est pas dans les listes courantes. Temps estimé pour craquer : {time_seconds:.2f} secondes."


password = "test"


# Vérification du mot de passe
def testerMdp(ev):
    if password:
        result = check_password(password)
        #alert(result)
        InfoDialog("Bravo","Hello !")
    else:
        InfoDialog("head", "body")

document["button1"].bind("click", testerMdp)