<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <div class="container">
        <h5>Payment Confirmation: your reference number is <b>{{$data['reference']}}</b></h5>
    </div>
    
    <div class="container">
        <table class="table table-striped table-hover table-bordered">
            <tbody>
                <tr>
                    <th>User Name</th>
                    <th>User Email</th>
                    <th>User Phone</th>
                    <th>Payment reference</th>
                    <th></th>
                </tr>
                <tr>
                    <td>{{ $data['name'] }}</td>
                    <td>{{ $data['email'] }}</td>
                    <td>{{ $data['phone'] }}</td>
                    <td>{{ $data['reference'] }}</td>
                </tr>
            </tbody>
        </table>          
    </div>

    <div class="container">
        <table class="table table-striped table-hover table-bordered">
            <tbody>
                <tr>
                    <th>Class Name</th>
                    <th>Instructor</th>
                    <th>Day</th>
                    <th>Price</th>
                    <th></th>
                </tr>
                @foreach($data['carts'] as $cart)
                    <tr>
                        <td>{{ $cart['name'] }}</td>
                        <td>{{ $cart['instructor'] }}</td>
                        <td>{{ $cart['day'] }}</td>
                        <td>&#8358; {{ number_format($cart['price'], 2) }}</td>
                    </tr>
                @endforeach
                <tr>
                    <th colspan="3"><span class="pull-right">Registration Fee </span></th>
                    <th id="">&#8358; {{number_format(2000,2)}}</th>
                </tr>
                <tr>
                    <th colspan="3"><span class="pull-right">Item Amount </span></th>
                    <th id="" >&#8358; {{ number_format($data['carts']->pluck('price')->sum(), 2) }}</th>
                </tr>
                <tr>
                    <th colspan="3"><span class="pull-right">Total </span></th>
                    <th id="price_bag" value="{{ number_format(2000 + $data['carts']->pluck('price')->sum(), 2) }}">&#8358; {{ number_format(2000 + $data['carts']->pluck('price')->sum(), 2) }}</th>
                </tr>
            </tbody>
        </table>          
    </div>

    <div class="container">
        <h5>Please bring this alone</h5>
    </div>
    
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>