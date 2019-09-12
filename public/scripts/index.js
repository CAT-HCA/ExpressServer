$(document).ready(function ()
{
    function getData(typeOfData)
    {

        $.getJSON("http://localhost:3000/" + typeOfData,
            function (data)
            {
            })
            .done(function (data)
            {
                console.log(data);
                displayData(data, typeOfData)
            })
            .fail(function ()
            {
                console.log('Error');
            })
    }

    function displayData(data, typeOfData)
    {
        if (typeOfData == 'leagues')
        {
            $('#dataList').empty();

            for (let i = 0; i < data.length; i++)
            {
                $('#dataList').append($('<li>',
                    {
                        html: data[i].Name
                    }))
            }
        }
        else
        {
            $('#dataList').empty();

            for (let i = 0; i < data.length; i++)
            {
                $('#dataList').append($('<li>',
                    {
                        html: data[i].TeamName
                    }))
            }
        }

    }

    $("#leaguesBtn").on("click", function ()
    {
        getData('leagues');
    })

    $("#teamsBtn").on("click", function ()
    {
        getData('teams');
    })
})