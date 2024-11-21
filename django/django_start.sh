#! /bin/bash

if [ "$DATABASE" = "postgres" ]; then
    echo "Waiting for postgres..."

    while ! nc -z $DATABASE_HOST $SQL_PORT; do
        sleep 0.1
    done

    echo "PostgresSQL started"
fi

apt-get install cron -y 

python3 -m venv .venv && source .venv/bin/activate\
&& pip install -r requirements.txt\


if [ ! -d "staticfiles" ]; then
    mkdir staticfiles
fi

python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py collectstatic --no-input
#python manage.py crontab run 89b108a04c1e9d09c7bf36ceecf7f0e3 comando para debuggear el cron antes que se ejecute el servidor de gunicorn

# export DJANGO_SETTINGS_MODULE=trascendance.settings
# python3 -c "import django; django.setup()"


gunicorn --bind 0.0.0.0:8000 ft_form.wsgi:application