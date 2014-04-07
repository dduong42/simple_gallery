function Index(min, max)
{
	this.index = 0;
	this.min = min;
	this.max = max;

	this.get = function()
	{
		return this.index;
	};
	
	this.previous = function()
	{
		if (this.index > this.min)
			this.index -= 1;
		return this.index;
	};
	
	this.next = function()
	{
		if (this.index < this.max)
			this.index += 1;
		return this.index;
	};
}

function EventHandler()
{
	this.array = [];
	
	this.push = function(event, callback)
	{
		this.array.push({
			event: event,
			callback: callback,
		});
	};
	
	this.trigger = function(event)
	{
		for (var i = 0; i < this.array.length; i++)
		{
			if (this.array[i].event == event)
				this.array[i].callback();
		}
	};
}