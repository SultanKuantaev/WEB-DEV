def sleep_in(weekday: bool, vacation: bool) -> bool:
    return not weekday or vacation  


print(sleep_in(False, False))  
print(sleep_in(True, False))   
print(sleep_in(False, True))   
print(sleep_in(True, True))    
