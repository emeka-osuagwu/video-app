@if($carts->where('class_id', 17)->count() > 0 && $class['class_id'] == 1 )
    ehfwefejrherjherjehr
@else
    <article class="post-wrap {{ $class['class_id'] }}" data-animation="fadeInUp" data-animation-delay="300">
        
        <div class="media">
            <!-- -->
            <div class="post-media pull-left">
                <img src="assets/img/images/{{ $class['instructor_image'] }}" alt="" class="media-object" />
            </div>
            <!-- -->
            <div class="media-body">
                <div class="post-header">
                    <div class="post-meta">
                        <span class="post-date"><i class="fa fa-clock-o"></i> {{ $class['start_time'] }} - {{ $class['end_time'] }}</span>
                        @if($class['price'] > 0)
                            <a href="{{ url('add_to_cookie?class_id=' . $class['class_id']) }}" class="pull-right">
                                <button class="add_to_cart_btn btn" style="font-size: 15px" data="{{ $class['class_id'] }}">
                                    Add to cart
                                </button>
                            </a>
                        @else

                        @endif
                    </div>
                    <h2 class="post-title"><a href="#">{{ $class['name'] }} 
                        @if($class['price'] > 0)
                            (&#8358; {{ number_format( (int) $class['price'], 2) }})</a></h2>
                        @else
                            (Free Class)
                        @endif
                </div>
                <div class="post-body">
                    <div class="post-excerpt">
                        <p>{{ $class['description'] }}</p>
                    </div>
                </div>
                <div class="post-footer">
                    <span class="post-readmore">
                        <i class="fa fa-microphone"></i> <strong>{{ $class['instructor'] }}</strong>
                    </span>
                </div>
            </div>
            <!-- -->
        </div>
    </article>
@endif