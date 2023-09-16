import numpy as np
import pytesseract as tcr
import matplotlib.pyplot as plt
# import cv2
import json

# tcr.pytesseract.tesseract_cmd = r'/opt/homebrew/bin/tesseract'
clipboardImage = ImageGrab.grabclipboard()
img = np.array(clipboardImage)
plt.imshow(img)

course_id_img = img[:, :200]
course_names_img = img[:, 200:840]
course_times_img = img[:, 840:]
id = tcr.image_to_string(course_id_img)[:-1] # cut \n on last char
names = tcr.image_to_string(course_names_img, lang='tha+eng')

thai_alps = []
for i in range(ord('ก'), 3675 + 1):
    # print(chr(i), end=", ")
    thai_alps += [chr(i)]

eng_alps = []
for i in range(ord('A'), ord('z') + 1):
    # print(chr(i), end=",")
    eng_alps += [chr(i)]

def splitThaiAndEng(string):
    T = []
    E = []
    swapToE = False
    prev = 'ø'
    for i in range(len(string)):
        # print(names[i])
        cur = names[i]
    
        if (prev in thai_alps and cur in eng_alps):
            # swap to list E
            swapToE = True
    
        if (swapToE):
            E += [cur]
        else:
            T += [cur]
        # T += []
        if cur in ['\n']:
            continue;
        prev = cur
        # prev = cur

    # cut \n
    T = T[:-1]
    E = E[:-1]
    # return T, E
    return "".join(T), "".join(E)

T, E = splitThaiAndEng(names)
# print(T)
# print(E)

def splitTimes(times):
    i = 0
    credit_str = ''
    interval_str = ''
    while (times[i] != '('):
        # print(times[i])
        credit_str += times[i]
        i += 1
    i += 1
    while (times[i] != ')'):
        interval_str += times[i]
        i += 1
    return (credit_str, interval_str)
    # while (i < len(times)):
    #     print(i)
        # i += 1
    
credit, interval = splitTimes(times)

# print("id = ", id)
# print("thai name = ", T)
# print("eng name  = ", E)
# print("credit = ", credit)
# print("interval = ", interval)

dic = {
    "name": T,
    "nameEng": E,
    "ID": id,
    "credit": credit,
    "compulsory": 'ไม่มี',
    "hours": interval
}

import pyperclip

json_obj = json.dumps(dic, indent=4, ensure_ascii=False)
# print(json_obj)
pyperclip.copy(json_obj)
# import pyperclip