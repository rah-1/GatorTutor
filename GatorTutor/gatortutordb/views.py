from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Tutor
import json

# Create your views here.
@csrf_exempt
def test(request):
    """
    REQUEST
    {
    "name": "lebron james",
    "ufid": "23"
    }
    RESPONSE
    {
    "Success": "Test request works."
    }
    """
    if request.method == 'POST':
        try:
            # Parse JSON data sent from the client
            data = json.loads(request.body)

            instance = Tutor(name=data['name'], ufid=data['ufid'])
            instance.save()

            return JsonResponse({'Success': 'Test request works.'})

        except json.JSONDecodeError as e:
            return JsonResponse({'error': 'Invalid JSON data.'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method.'}, status=405)