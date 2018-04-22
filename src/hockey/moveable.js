class Movable {
	moveTo(position, duration, spin) {
		this.movementCancelled = false;

		const sx = this.sprite.position.x;
		const sy = this.sprite.position.y;
		const fx = position.x;
		const fy = position.y;

		const theta = Math.atan2(sy - fy, sx - fx) + Math.PI;
		const force = game.utils.dist(sx, sy, fx, fy)*1.5;

		this.sprite.body.velocity.x += Math.cos(theta)*force;
		this.sprite.body.velocity.y += Math.sin(theta)*force;

		if (spin) {
			game.phaser.add.tween(this.sprite).to({ angle: this.sprite.angle + 2000 }, duration, Phaser.Easing.Quadratic.Out, true);
		} else {
			//this.lookAt(points[0]);
		}
	}

	lookAt(position) {
		const theta = Math.atan2(this.sprite.position.y - position.y, this.sprite.position.x - position.x);
		this.sprite.angle = (theta*180/Math.PI) - 90;
	}

	cancelMovement() {
		this.movementCancelled = true;
		this.sprite.body.velocity.set(0);
	}
}

