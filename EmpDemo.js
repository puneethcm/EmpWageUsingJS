const isPresent = 1;
    let emp = Math.floor(Math.random()*10%2);
    if(emp == isPresent)
    {
        console.log("Employee is Present");
        return;
    }
    else
    {
        console.log("Employee is Absent");
    }
    console.log();