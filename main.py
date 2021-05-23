import requests as req
import threading

url = ""

def do_req():
    while True:
        req.get(url)

threads = []

for i in range(50):
    t = threading.Thread(target= do_req)
    t.daemon = True
    threads.append(t)

for i in range(50):
    threads[i].start()

for i in range(50):
    threads[i].join()