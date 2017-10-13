    <div class="">
        <table class="table table-striped table-hover table-bordered">
            <tbody>
                <tr>
                    <th>Class Name</th>
                    <th>Instructor</th>
                    <th>Day</th>
                    <th>Price</th>
                </tr>
                @foreach($data['carts'] as $cart)
                    <tr>
                        <td>{{ $cart->name }}</td>
                        <td>{{ $cart->instructor }}</td>
                        <td>{{ $cart->day }}</td>
                        <td>&#8358; {{ $cart->price }}</td>
                    </tr>
                @endforeach
                <tr>
                    <th colspan="3"><span class="pull-right">Total </span></th>
                    <th id="price_bag">&#8358; {{ $data['price'] }}</th>
                </tr>
                <tr>
                    <th colspan="3"><span class="pull-right">Payment Reference</span></th>
                    <th id="price_bag">{{ $data['reference'] }}</th>
                </tr>
                <tr>

                </tr>
            </tbody>
        </table>          
    </div>