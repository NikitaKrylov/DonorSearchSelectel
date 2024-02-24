import smtplib
from email.mime.text import MIMEText


def create_suggestion_message(email: str, pet_name: str):
    message = MIMEText("Хууууй")
    message['From'] = 'idoverchiviiloh@yandex.ru'
    message['To'] = 'nikitak11092005@gmail.com'
    message["Subject"] = "Hello World!"
    return message


async def send_email(message: MIMEText):
    with smtplib.SMTP_SSL('smtp.yandex.ru', 465) as smtp_server:
        smtp_server.login('idoverchiviiloh@yandex.ru', 'nic11092005')
        smtp_server.sendmail('idoverchiviiloh@yandex.ru', 'nikitak11092005@gmail.com', message.as_string())

